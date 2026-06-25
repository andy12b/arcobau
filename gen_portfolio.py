import os
import json

# Generate portfolio JSON data files from existing images
categories = {
    "termosistem": 67,
    "finisaje": 77,
    "ceramica": 86,
    "structuri": 32,
}

os.makedirs("data/portfolio", exist_ok=True)

for cat, count in categories.items():
    photos = []
    for i in range(1, count + 1):
        photos.append({
            "image": f"/images/{cat}/{cat}-{i}.jpeg",
            "title": f"{cat.capitalize()} {i}"
        })
    
    with open(f"data/portfolio/{cat}.json", "w", encoding="utf-8") as f:
        json.dump({"photos": photos}, f, ensure_ascii=False, indent=2)
    
    print(f"Created data/portfolio/{cat}.json with {count} photos")

print("Done!")
