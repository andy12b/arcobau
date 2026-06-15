import re

def fix_paths(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace old images with new ones based on category
    replacements = {
        "/images/apartamente/apartament-1.jpg": "/images/fatade-blocuri/fatade-blocuri-1.jpeg",
        "/images/case/casa-1.jpg": "/images/fatade-case/fatade-case-1.jpeg",
        "/images/apartamente/apartament-2.jpg": "/images/ceramica/ceramica-2.jpeg",
        "/images/constructii/constructie-9.jpg": "/images/fatade-case/fatade-case-2.jpeg",
        "/images/podele/podea-8.jpg": "/images/fatade-blocuri/fatade-blocuri-2.jpeg",
        "/images/podele/podea-43.jpg": "/images/ceramica/ceramica-3.jpeg",
        "/images/finisaje/finisaj-18.jpg": "/images/ceramica/ceramica-4.jpeg",
        "/images/case/casa-2.jpg": "/images/fatade-case/fatade-case-3.jpeg",
        "/images/apartamente/apartament-5.jpg": "/images/fatade-blocuri/fatade-blocuri-3.jpeg",
        "/images/apartamente/apartament-12.jpg": "/images/ceramica/ceramica-5.jpeg",
        "/images/finisaje/finisaj-22.jpg": "/images/ceramica/ceramica-6.jpeg",
        "/images/case/casa-3.jpg": "/images/fatade-case/fatade-case-4.jpeg"
    }

    # Also replace any other generic old ones just in case
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    # Catch any remaining old paths and map them dynamically
    def catch_all(match):
        old_path = match.group(0)
        if "logo" in old_path: return old_path
        if "apartamente" in old_path or "podele" in old_path or "finisaje" in old_path:
            return "/images/ceramica/ceramica-1.jpeg"
        if "case" in old_path or "constructii" in old_path:
            return "/images/fatade-case/fatade-case-1.jpeg"
        return old_path

    content = re.sub(r'"/images/[^"]+"', catch_all, content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

for file in ["app/page.tsx", "app/expertise/ExpertisePage.tsx", "app/company/CompanyPage.tsx"]:
    fix_paths(file)

print("Paths fixed!")
