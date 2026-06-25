import fs from 'fs';
import path from 'path';
import { translations } from './lib/translations';

const outDir = path.join(process.cwd(), 'data', 'content');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (const [lang, content] of Object.entries(translations)) {
  fs.writeFileSync(
    path.join(outDir, `${lang.toLowerCase()}.json`),
    JSON.stringify(content, null, 2)
  );
}
console.log('Done extracting translations.');
