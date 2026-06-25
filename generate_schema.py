import json

def generate_fields(data):
    fields = []
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(value, dict):
                fields.append({
                    "label": key.capitalize(),
                    "name": key,
                    "widget": "object",
                    "collapsed": True,
                    "fields": generate_fields(value)
                })
            elif isinstance(value, list) and len(value) > 0 and isinstance(value[0], dict):
                fields.append({
                    "label": key.capitalize(),
                    "name": key,
                    "widget": "list",
                    "fields": generate_fields(value[0])
                })
            elif isinstance(value, list) and len(value) > 0 and isinstance(value[0], str):
                 fields.append({
                    "label": key.capitalize(),
                    "name": key,
                    "widget": "list",
                    "field": {"name": "item", "widget": "string"}
                 })
            else:
                widget_type = "text" if isinstance(value, str) and len(value) > 50 else "string"
                fields.append({
                    "label": key.capitalize(),
                    "name": key,
                    "widget": widget_type
                })
    return fields

with open("data/content/en.json", "r", encoding="utf-8") as f:
    data = json.load(f)

fields = generate_fields(data)

import yaml
config = {
    "backend": {
        "name": "github",
        "repo": "andy12b/arcobau",
        "branch": "main"
    },
    "media_folder": "public/images",
    "public_folder": "/images",
    "collections": [
        {
            "name": "translations",
            "label": "Traduceri Site",
            "folder": "data/content",
            "create": False,
            "extension": "json",
            "format": "json",
            "editor": {"preview": False},
            "fields": fields
        }
    ]
}

with open("public/admin/config.yml", "w", encoding="utf-8") as f:
    yaml.dump(config, f, sort_keys=False, allow_unicode=True)

print("config.yml generated!")
