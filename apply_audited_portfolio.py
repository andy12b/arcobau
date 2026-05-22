import re

# Let's define the exact audited categories
audited_mapping = {
    # 1. apartamente
    "apartament-1.jpg": "Constructii blocuri",
    "apartament-2.jpg": "Constructii blocuri",
    "apartament-3.jpg": "Constructii case",
    "apartament-4.jpg": "Constructii blocuri",
    "apartament-5.jpg": "Constructii blocuri",
    "apartament-6.jpg": "Constructii case",
    "apartament-7.jpg": "Constructii case",
    "apartament-8.jpg": "Constructii blocuri",
    "apartament-9.jpg": "Constructii case",
    "apartament-10.jpg": "Finisaje Interioare",
    "apartament-11.jpg": "Finisaje Interioare",
    "apartament-12.jpg": "Constructii case",
    
    # 2. case
    "casa-1.jpg": "Constructii case",
    "casa-2.jpg": "Finisaje Exterioare",
    "casa-3.jpg": "Finisaje Exterioare",
    "casa-4.jpg": "Finisaje Exterioare",
    "casa-5.jpg": "Finisaje Exterioare",
    "casa-6.jpg": "Finisaje Exterioare",
    "casa-7.jpg": "Constructii blocuri",
    "casa-8.jpg": "Constructii case",
    
    # 3. constructii
    "constructie-1.jpg": "Constructii case",
    "constructie-2.jpg": "Constructii case",
    "constructie-3.jpg": "Constructii case",
    "constructie-4.jpg": "Constructii case",
    "constructie-5.jpg": "Constructii case",
    "constructie-6.jpg": "Constructii case",
    "constructie-7.jpg": "Constructii case",
    "constructie-8.jpg": "Constructii blocuri",
    "constructie-9.jpg": "Constructii blocuri",
    "constructie-10.jpg": "Constructii blocuri",
    "constructie-11.jpg": "Constructii case",
    "constructie-12.jpg": "Constructii case",
    "constructie-13.jpg": "Finisaje Interioare",
    "constructie-14.jpg": "Finisaje Interioare",
    "constructie-15.jpg": "Finisaje Interioare",
    "constructie-16.jpg": "Finisaje Interioare",
    "constructie-17.jpg": "Constructii case",
    "constructie-18.jpg": "Constructii case",
    
    # 4. finisaje
    "finisaj-1.jpg": "Constructii case",
    "finisaj-2.jpg": "Constructii blocuri",
    "finisaj-3.jpg": "Constructii blocuri",
    "finisaj-4.jpg": "Constructii blocuri",
    "finisaj-5.jpg": "Constructii case",
    "finisaj-6.jpg": "Constructii case",
    "finisaj-7.jpg": "Constructii case",
    "finisaj-8.jpg": "Constructii case",
    "finisaj-9.jpg": "Constructii blocuri",
    "finisaj-10.jpg": "Constructii blocuri",
    "finisaj-11.jpg": "Constructii blocuri",
    "finisaj-12.jpg": "Constructii case",
    "finisaj-13.jpg": "Constructii case",
    "finisaj-14.jpg": "Constructii case",
    "finisaj-15.jpg": "Constructii case",
    "finisaj-16.jpg": "Constructii case",
    "finisaj-17.jpg": "Finisaje Interioare",
    "finisaj-18.jpg": "Finisaje Interioare",
    "finisaj-19.jpg": "Finisaje Interioare",
    "finisaj-20.jpg": "Finisaje Interioare",
    "finisaj-21.jpg": "Finisaje Interioare",
    "finisaj-22.jpg": "Finisaje Interioare",
    "finisaj-23.jpg": "Finisaje Interioare",
    "finisaj-24.jpg": "Constructii blocuri",
    "finisaj-25.jpg": "Finisaje Interioare",
    "finisaj-26.jpg": "Constructii case",
    "finisaj-27.jpg": "Finisaje Interioare",
    "finisaj-28.jpg": "Constructii case",
    "finisaj-29.jpg": "Finisaje Exterioare",
    "finisaj-30.jpg": "Constructii case",
    "finisaj-31.jpg": "Constructii case",
    "finisaj-32.jpg": "Constructii case",
    "finisaj-33.jpg": "Constructii case",
    
    # 5. podele
    "podea-1.jpg": "Finisaje Interioare",
    "podea-2.jpg": "Constructii case",
    "podea-3.jpg": "Constructii case",
    "podea-4.jpg": "Constructii case",
    "podea-5.jpg": "Finisaje Interioare",
    "podea-6.jpg": "Constructii case",
    "podea-7.jpg": "Constructii case",
    "podea-8.jpg": "Finisaje Interioare",
    "podea-9.jpg": "Finisaje Interioare",
    "podea-10.jpg": "Constructii case",
    "podea-11.jpg": "Finisaje Interioare",
    "podea-12.jpg": "Finisaje Interioare",
    "podea-13.jpg": "Finisaje Interioare",
    "podea-14.jpg": "Finisaje Interioare",
    "podea-15.jpg": "Finisaje Interioare",
    "podea-16.jpg": "Finisaje Interioare",
    "podea-17.jpg": "Finisaje Interioare",
    "podea-18.jpg": "Constructii case",
    "podea-19.jpg": "Constructii case",
    "podea-20.jpg": "Constructii case",
    "podea-21.jpg": "Constructii blocuri",
    "podea-22.jpg": "Finisaje Exterioare",
    "podea-23.jpg": "Constructii blocuri",
    "podea-24.jpg": "Constructii case",
    "podea-25.jpg": "Constructii case",
    "podea-26.jpg": "Constructii case",
    "podea-27.jpg": "Constructii blocuri",
    "podea-28.jpg": "Constructii blocuri",
    "podea-29.jpg": "Constructii blocuri",
    "podea-30.jpg": "Finisaje Exterioare",
    "podea-31.jpg": "Constructii case",
    "podea-32.jpg": "Constructii case",
    "podea-33.jpg": "Constructii case",
    "podea-34.jpg": "Constructii case",
    "podea-35.jpg": "Constructii blocuri",
    "podea-36.jpg": "Constructii case",
    "podea-37.jpg": "Finisaje Interioare",
    "podea-38.jpg": "Constructii blocuri",
    "podea-39.jpg": "Constructii blocuri",
    "podea-40.jpg": "Constructii case",
    "podea-41.jpg": "Constructii case",
    "podea-42.jpg": "Constructii case",
    "podea-43.jpg": "Constructii blocuri",
    "podea-44.jpg": "Constructii case",
    "podea-45.jpg": "Constructii case",
    "podea-46.jpg": "Constructii case",
    "podea-47.jpg": "Constructii case",
    "podea-48.jpg": "Constructii case",
    "podea-49.jpg": "Constructii blocuri",
    "podea-50.jpg": "Constructii blocuri",
    "podea-51.jpg": "Constructii case",
    "podea-52.jpg": "Constructii blocuri",
    "podea-53.jpg": "Constructii blocuri",
    "podea-54.jpg": "Constructii blocuri",
    "podea-55.jpg": "Constructii blocuri"
}

# Read temp_projects.txt
with open("temp_projects.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

projects = []
for line in lines:
    line = line.strip()
    if not line: continue
    id_str = line.split("id: ")[1].split(",")[0]
    filename = line.split('title: "')[1].split('"')[0]
    img = line.split('img: "')[1].split('"')[0]
    
    category = audited_mapping.get(filename, "Finisaje Interioare")
    
    # Set sizes so that the first few in each category look beautiful/large
    size = "small"
    # Finisaje Interioare large: apartament-10.jpg
    # Finisaje Exterioare large: casa-2.jpg
    # Constructii blocuri large: apartament-1.jpg
    # Constructii case large: constructie-1.jpg
    if filename in ["apartament-10.jpg", "casa-2.jpg", "apartament-1.jpg", "constructie-1.jpg", "podea-8.jpg", "finisaj-18.jpg"]:
        size = "large"
        
    projects.append(f'    {{ id: {id_str}, title: "Project {id_str}", baseCat: "{category}", category: "{category}", img: "{img}", size: "{size}" }},')

# Replace inside PortfolioPage.tsx
replacement = """  const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "Finisaje Interioare": { EN: `Interior Finish ${id}`, DE: `Innenausbau ${id}`, FR: `Finition Intérieure ${id}`, RO: `Finisaj Interior ${id}`, IT: `Finitura Interni ${id}` },
      "Finisaje Exterioare": { EN: `Exterior Finish ${id}`, DE: `Außenausbau ${id}`, FR: `Finition Extérieure ${id}`, RO: `Finisaj Exterior ${id}`, IT: `Finitura Esterni ${id}` },
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
    { id: "Finisaje Interioare", label: t.portfolio.categories.finishesInt },
    { id: "Finisaje Exterioare", label: t.portfolio.categories.finishesExt },
    { id: "Constructii blocuri", label: t.portfolio.categories.blocks },
    { id: "Constructii case", label: t.portfolio.categories.houses },
  ];

  const projects = [
""" + "\n".join(projects) + "\n  ];"

with open("app/portfolio/PortfolioPage.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace from `const generateTitle` to `  ];` of projects array
content = re.sub(r'  const generateTitle =.*?  const projects = \[.*?\n  \];', replacement, content, flags=re.DOTALL)

with open("app/portfolio/PortfolioPage.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Audited classification applied successfully.")
