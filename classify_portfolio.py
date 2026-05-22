import re

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
    dir_name = img.split("/")[2]
    
    category = "Finisaje Interioare"
    
    # 1. Podele folder images -> finished flooring/tiles -> Finisaje Interioare
    if dir_name == "podele":
        category = "Finisaje Interioare"
        
    # 2. Apartamente folder images
    elif dir_name == "apartamente":
        if filename in ["apartament-1.jpg", "apartament-4.jpg", "apartament-5.jpg", "apartament-6.jpg"]:
            category = "Constructii blocuri"
        elif filename in ["apartament-7.jpg", "apartament-9.jpg"]:
            category = "Constructii case"
        elif filename in ["apartament-8.jpg", "apartament-10.jpg"]:
            # Drywall framing / site prep in progress -> Constructii blocuri (as they are inside apartment blocks)
            category = "Constructii blocuri"
        else:
            category = "Finisaje Interioare" # 2, 3, 11, 12 (finished clean rooms)
            
    # 3. Case folder images
    elif dir_name == "case":
        if filename in ["casa-2.jpg", "casa-3.jpg", "casa-4.jpg", "casa-5.jpg"]:
            category = "Finisaje Exterioare" # finished gazebos / patios
        elif filename in ["casa-6.jpg", "casa-7.jpg", "casa-8.jpg"]:
            category = "Constructii case" # under construction gazebo/interior drywall/raw concrete
        else:
            category = "Finisaje Exterioare" # casa-1 is a clean finished white facade
            
    # 4. Constructii folder images
    elif dir_name == "constructii":
        # All these are under-construction concrete/BCA brick walls, HVAC pipes, plastering guide rails
        if filename in ["constructie-1.jpg"]:
            category = "Constructii case" # rough house construction
        else:
            category = "Constructii case" # rough house construction / site work
            
    # 5. Finisaje folder images
    elif dir_name == "finisaje":
        # Check for Finisaje Exterioare (finished, clean exterior)
        if filename in ["finisaj-59.jpg", "finisaj-60.jpg", "finisaj-62.jpg", "finisaj-63.jpg", "finisaj-64.jpg", "finisaj-65.jpg", "finisaj-85.jpg", "finisaj-95.jpg"]:
            category = "Finisaje Exterioare"
        # Check for Finisaje Interioare (finished, clean interior)
        elif filename in [
            "finisaj-18.jpg", "finisaj-22.jpg", "finisaj-27.jpg", "finisaj-28.jpg",
            "finisaj-47.jpg", "finisaj-48.jpg", "finisaj-49.jpg", "finisaj-51.jpg", "finisaj-52.jpg",
            "finisaj-56.jpg", "finisaj-70.jpg", "finisaj-72.jpg", "finisaj-76.jpg", "finisaj-77.jpg",
            "finisaj-78.jpg", "finisaj-79.jpg", "finisaj-103.jpg", "finisaj-104.jpg", "finisaj-108.jpg",
            "finisaj-58.jpg", "finisaj-80.jpg"
        ]:
            category = "Finisaje Interioare"
        else:
            # All other finisaj-* are drywall panel installations, joint compound, tiling with spacers, facade scaffolding, yellow facade insulation
            # Since these are under-construction site works (santier/mizerie), they go to Constructii case (rough residential construction)
            category = "Constructii case"
            
    # Set sizes so that the first few in each category look beautiful/large
    size = "small"
    if filename in ["apartament-2.jpg", "casa-1.jpg", "casa-3.jpg", "constructie-1.jpg", "finisaj-103.jpg", "apartament-1.jpg", "podea-8.jpg"]:
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

print("Classification completed successfully.")
