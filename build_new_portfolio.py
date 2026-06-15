import os
import glob
import re

folders = {
    "ceramica": "Ceramică exterior interios",
    "fatade-blocuri": "fatade blocuri",
    "fatade-case": "fatade case"
}

def sanitize_and_rename():
    projects = []
    pid = 1
    
    for folder, original_name in folders.items():
        base_path = os.path.join("public", "images", folder)
        files = glob.glob(os.path.join(base_path, "*.*"))
        
        # Sort files to have a consistent order
        files.sort()
        
        for idx, file_path in enumerate(files):
            # Rename file to cleaner format
            ext = os.path.splitext(file_path)[1].lower()
            if ext not in [".jpg", ".jpeg", ".png", ".webp"]:
                continue
                
            new_filename = f"{folder}-{idx+1}{ext}"
            new_file_path = os.path.join(base_path, new_filename)
            
            # Only rename if it doesn't already match the pattern
            if file_path != new_file_path:
                os.rename(file_path, new_file_path)
            
            # The category to use in the TSX (must match the ID exactly)
            cat_id = folder
            
            # Determine size for grid: make the first one large
            size = "large" if idx == 0 else "small"
            
            img_url = f"/images/{folder}/{new_filename}"
            
            projects.append(f'    {{ id: {pid}, title: "Project {pid}", baseCat: "{cat_id}", category: "{cat_id}", img: "{img_url}", size: "{size}" }},')
            pid += 1

    return projects

def update_portfolio_page(projects):
    replacement = """  const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "ceramica": { EN: `Ceramics ${id}`, DE: `Keramik ${id}`, FR: `Céramique ${id}`, RO: `Ceramică ${id}`, IT: `Ceramica ${id}` },
      "fatade-blocuri": { EN: `Block Facade ${id}`, DE: `Blockfassade ${id}`, FR: `Façade Immeuble ${id}`, RO: `Fațadă Bloc ${id}`, IT: `Facciata Condominio ${id}` },
      "fatade-case": { EN: `House Facade ${id}`, DE: `Hausfassade ${id}`, FR: `Façade Maison ${id}`, RO: `Fațadă Casă ${id}`, IT: `Facciata Casa ${id}` },
    };
    return titles[category]?.[language] || `Project ${id}`;
  };

  const getTranslatedTitle = (project: any) => {
    return generateTitle(project.baseCat, project.id);
  };

  const categories = [
    { id: "All", label: t.portfolio.categories.all },
    { id: "ceramica", label: t.portfolio.categories.ceramica },
    { id: "fatade-blocuri", label: t.portfolio.categories.fatadeBlocuri },
    { id: "fatade-case", label: t.portfolio.categories.fatadeCase },
  ];

  const projects = [
""" + "\n".join(projects) + "\n  ];"

    with open("app/portfolio/PortfolioPage.tsx", "r", encoding="utf-8") as f:
        content = f.read()

    # Replace from `const generateTitle` to `  ];` of projects array
    content = re.sub(r'  const generateTitle =.*?  const projects = \[.*?\n  \];', replacement, content, flags=re.DOTALL)

    with open("app/portfolio/PortfolioPage.tsx", "w", encoding="utf-8") as f:
        f.write(content)


def update_translations():
    with open("lib/translations.ts", "r", encoding="utf-8") as f:
        content = f.read()

    new_cats = {
        "EN": """      categories: {
        all: "All",
        ceramica: "Ceramics",
        fatadeBlocuri: "Apartment Facades",
        fatadeCase: "House Facades"
      }""",
        "FR": """      categories: {
        all: "Tout",
        ceramica: "Céramique",
        fatadeBlocuri: "Façades Immeubles",
        fatadeCase: "Façades Maisons"
      }""",
        "DE": """      categories: {
        all: "Alle",
        ceramica: "Keramik",
        fatadeBlocuri: "Blockfassaden",
        fatadeCase: "Hausfassaden"
      }""",
        "RO": """      categories: {
        all: "Toate",
        ceramica: "Ceramică exterior și interior",
        fatadeBlocuri: "Fațade blocuri",
        fatadeCase: "Fațade case"
      }""",
        "IT": """      categories: {
        all: "Tutti",
        ceramica: "Ceramica",
        fatadeBlocuri: "Facciate Condomini",
        fatadeCase: "Facciate Case"
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
