import json
import re

with open("temp_projects.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

projects = []
for line in lines:
    line = line.strip()
    if not line: continue
    id_str = line.split("id: ")[1].split(",")[0]
    filename = line.split('title: "')[1].split('"')[0]
    img = line.split('img: "')[1].split('"')[0]
    dir_name = img.split("/")[2]
    
    category = "Finisaje"
    if dir_name == "apartamente":
        category = "Interioare"
    elif dir_name == "case":
        category = "Constructii case"
    elif dir_name == "constructii":
        id_num = int(filename.split("-")[1].split(".")[0])
        if id_num <= 5:
            category = "Exterioare"
        else:
            category = "Constructii blocuri"
    elif dir_name == "finisaje" or dir_name == "podele":
        category = "Finisaje"
        
    size = "large" if (filename == "apartament-1.jpg" or filename == "casa-1.jpg" or filename == "constructie-1.jpg" or filename == "constructie-6.jpg" or filename == "finisaj-1.jpg" or filename == "podea-1.jpg") else "small"
    
    projects.append(f'    {{ id: {id_str}, title: "Project {id_str}", baseCat: "{category}", category: "{category}", img: "{img}", size: "{size}" }},')

replacement = """  const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "Finisaje": { EN: `Premium Finish ${id}`, DE: `Premium-Ausbau ${id}`, FR: `Finition Premium ${id}`, RO: `Finisaj Premium ${id}`, IT: `Finitura Premium ${id}` },
      "Interioare": { EN: `Modern Interior ${id}`, DE: `Modernes Interieur ${id}`, FR: `Intérieur Moderne ${id}`, RO: `Interior Modern ${id}`, IT: `Interno Moderno ${id}` },
      "Exterioare": { EN: `Exterior Work ${id}`, DE: `Außenarbeiten ${id}`, FR: `Travaux Extérieurs ${id}`, RO: `Lucrare Exterioară ${id}`, IT: `Lavoro Esterno ${id}` },
      "Constructii blocuri": { EN: `Apartment Building ${id}`, DE: `Wohnblock ${id}`, FR: `Immeuble ${id}`, RO: `Construcție Bloc ${id}`, IT: `Condominio ${id}` },
      "Constructii case": { EN: `Residential House ${id}`, DE: `Wohnhaus ${id}`, FR: `Maison Résidentielle ${id}`, RO: `Casă Rezidențială ${id}`, IT: `Casa Residenziale ${id}` },
    };
    return titles[category]?.[language] || `Project ${id}`;
  };

  const getTranslatedTitle = (project: any) => {
    return generateTitle(project.baseCat, project.id);
  };

  const categories = [
    { id: "All", label: t.portfolio.categories.all },
    { id: "Finisaje", label: t.portfolio.categories.finishes },
    { id: "Interioare", label: t.portfolio.categories.interiors },
    { id: "Exterioare", label: t.portfolio.categories.exteriors },
    { id: "Constructii blocuri", label: t.portfolio.categories.blocks },
    { id: "Constructii case", label: t.portfolio.categories.houses },
  ];

  const projects = [
""" + "\n".join(projects) + "\n  ];"

with open("app/portfolio/PortfolioPage.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(r'const titleTranslations: Record<string, Record<string, string>> = \{.*?\n  \];', replacement, content, flags=re.DOTALL)

content = content.replace("getTranslatedTitle(project.title)", "getTranslatedTitle(project)")

with open("app/portfolio/PortfolioPage.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
