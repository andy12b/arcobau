import glob
import re

for filepath in glob.glob('app/**/*.tsx', recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # First, let's normalize everything by stripping quotes around /images/
    # (just in case some have them and some don't)
    content = re.sub(r'["\'](/images/[^"\']+)["\']', r'\1', content)
    
    # Now add double quotes around all /images/... paths
    content = re.sub(r'(/images/[a-zA-Z0-9_/-]+\.(?:jpeg|jpg|png|webp))', r'"\1"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Quotes fixed!")
