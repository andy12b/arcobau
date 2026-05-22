import os

# Let's find all images inside public/images folders
folders = ["apartamente", "case", "constructii", "finisaje", "podele"]
image_list = []

for folder in folders:
    path = os.path.join("public", "images", folder)
    if os.path.exists(path):
        files = [f for f in os.listdir(path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        # Sort them numerically if possible
        def get_num(name):
            nums = re.findall(r'\d+', name)
            return int(nums[0]) if nums else 0
        import re
        files.sort(key=get_num)
        for f in files:
            image_list.append((folder, f))

# Let's generate a static HTML page
html_content = """<!DOCTYPE html>
<html>
<head>
    <title>Image Inspector</title>
    <style>
        body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
        h1 { color: #gold; }
        .group { border: 2px solid #444; margin-bottom: 30px; padding: 20px; border-radius: 8px; }
        .grid { display: grid; grid-template-cols: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .card { background: #222; border: 1px solid #333; padding: 10px; border-radius: 4px; text-align: center; }
        img { max-width: 100%; height: 180px; object-fit: cover; border-radius: 4px; display: block; margin: 0 auto 10px; }
        .filename { font-weight: bold; color: #00ffcc; font-size: 14px; margin-bottom: 5px; }
        .folder { color: #ff9900; font-size: 12px; }
    </style>
</head>
<body>
    <h1>ArcoBau Image Inspector</h1>
"""

current_folder = ""
for folder, filename in image_list:
    if folder != current_folder:
        if current_folder != "":
            html_content += "</div></div>"
        current_folder = folder
        html_content += f'<div class="group"><h2>Folder: {folder}</h2><div class="grid">'
    
    img_src = f"/images/{folder}/{filename}"
    html_content += f"""
        <div class="card">
            <img src="{img_src}" alt="{filename}">
            <div class="filename">{filename}</div>
            <div class="folder">{folder}/{filename}</div>
        </div>
    """

html_content += """
    </div></div>
</body>
</html>
"""

with open("public/inspect.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("inspect.html generated successfully.")
