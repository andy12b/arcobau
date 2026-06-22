import os
import glob
import re
import uuid

folders = {
    "termosistem": "Termosistem",
    "finisaje": "Finisaje",
    "ceramica": "Ceramică",
    "structuri": "Structuri"
}

def sanitize_and_rename():
    projects = []
    pid = 1
    
    for folder, original_name in folders.items():
        base_path = os.path.join("public", "images", folder)
        files = glob.glob(os.path.join(base_path, "*.*"))
        
        # Temp rename to avoid conflicts
        temp_files = []
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext not in [".jpg", ".jpeg", ".png", ".webp"]:
                continue
            temp_name = os.path.join(base_path, str(uuid.uuid4()) + ext)
            os.rename(f, temp_name)
            temp_files.append(temp_name)
            
        temp_files.sort()
        
        for idx, file_path in enumerate(temp_files):
            ext = os.path.splitext(file_path)[1].lower()
            new_filename = f"{folder}-{idx+1}{ext}"
            new_file_path = os.path.join(base_path, new_filename)
            
            os.rename(file_path, new_file_path)
            
            cat_id = folder
            size = "large" if idx == 0 else "small"
            img_url = f"/images/{folder}/{new_filename}"
            
            projects.append(f'    {{ id: {pid}, title: "Project {pid}", baseCat: "{cat_id}", category: "{cat_id}", img: "{img_url}", size: "{size}" }},')
            pid += 1

    return projects

def update_portfolio_page(projects):
    replacement = """  const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "termosistem": { EN: `Thermal System ${id}`, DE: `Wärmedämmung ${id}`, FR: `Système Thermique ${id}`, RO: `Termosistem ${id}`, IT: `Sistema Termico ${id}` },
      "finisaje": { EN: `Finishes ${id}`, DE: `Ausbau ${id}`, FR: `Finitions ${id}`, RO: `Finisaje ${id}`, IT: `Finiture ${id}` },
      "ceramica": { EN: `Ceramics ${id}`, DE: `Keramik ${id}`, FR: `Céramique ${id}`, RO: `Ceramică ${id}`, IT: `Ceramica ${id}` },
      "structuri": { EN: `Structure ${id}`, DE: `Struktur ${id}`, FR: `Structure ${id}`, RO: `Structuri ${id}`, IT: `Strutture ${id}` },
    };
    return titles[category]?.[language] || `Project ${id}`;
  };

  const getTranslatedTitle = (project: any) => {
    return generateTitle(project.baseCat, project.id);
  };

  const categories = [
    { id: "termosistem", label: t.portfolio.categories.termosistem },
    { id: "finisaje", label: t.portfolio.categories.finisaje },
    { id: "ceramica", label: t.portfolio.categories.ceramica },
    { id: "structuri", label: t.portfolio.categories.structuri },
  ];

  const projects = [
""" + "\n".join(projects) + "\n  ];"

    with open("app/portfolio/PortfolioPage.tsx", "r", encoding="utf-8") as f:
        content = f.read()

    content = re.sub(r'  const generateTitle =.*?  const projects = \[.*?\n  \];', replacement, content, flags=re.DOTALL)

    with open("app/portfolio/PortfolioPage.tsx", "w", encoding="utf-8") as f:
        f.write(content)

def update_translations():
    with open("lib/translations.ts", "r", encoding="utf-8") as f:
        content = f.read()

    new_cats = {
        "EN": """      categories: {
        termosistem: "Thermal System",
        finisaje: "Finishes",
        ceramica: "Ceramics",
        structuri: "Structures"
      }""",
        "FR": """      categories: {
        termosistem: "Système Thermique",
        finisaje: "Finitions",
        ceramica: "Céramique",
        structuri: "Structures"
      }""",
        "DE": """      categories: {
        termosistem: "Wärmedämmung",
        finisaje: "Ausbau",
        ceramica: "Keramik",
        structuri: "Strukturen"
      }""",
        "RO": """      categories: {
        termosistem: "Termosistem",
        finisaje: "Finisaje",
        ceramica: "Ceramică",
        structuri: "Structuri"
      }""",
        "IT": """      categories: {
        termosistem: "Sistema Termico",
        finisaje: "Finiture",
        ceramica: "Ceramica",
        structuri: "Strutture"
      }"""
    }

    for lang in ["EN", "FR", "DE", "RO", "IT"]:
        pattern = rf'({lang}:\s*{{[\s\S]*?portfolio:\s*{{[\s\S]*?)(      categories: {{[\s\S]*?}})'
        
        def repl(match):
            return match.group(1) + new_cats[lang]
            
        content = re.sub(pattern, repl, content)

    with open("lib/translations.ts", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    projs = sanitize_and_rename()
    update_portfolio_page(projs)
    update_translations()
    print("Portfolio updated with new images!")
