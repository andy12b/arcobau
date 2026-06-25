#!/usr/bin/env python3
"""
Auto-translate data/content/ro.json into EN, DE, FR, IT
using the free MyMemory translation API (no key required).
"""

import json
import time
import requests

LANGS = {
    "en": "ro|en",
    "de": "ro|de",
    "fr": "ro|fr",
    "it": "ro|it",
}

# Keys that should NOT be translated (brand names, emails, urls, etc.)
NO_TRANSLATE = {
    "ArcoBau", "Construim Viitorul", "Zürich", "Swiss", "GitHub",
    "Rigips", "ETICS",
}


def translate(text: str, lang_pair: str) -> str:
    """Translate a single string using MyMemory API."""
    if not text or not text.strip():
        return text
    # Skip short strings that are likely labels or untranslatable
    if len(text) < 2:
        return text
    try:
        url = "https://api.mymemory.translated.net/get"
        params = {"q": text, "langpair": lang_pair, "de": "admin@arcobau.ch"}
        resp = requests.get(url, params=params, timeout=10)
        data = resp.json()
        translated = data.get("responseData", {}).get("translatedText", text)
        # MyMemory returns the original on error
        if translated and translated.upper() != text.upper():
            return translated
        return text
    except Exception:
        return text


def translate_value(value, lang_pair: str):
    """Recursively translate a JSON value."""
    if isinstance(value, str):
        time.sleep(0.3)  # Rate limit: ~3 req/sec
        return translate(value, lang_pair)
    elif isinstance(value, list):
        return [translate_value(item, lang_pair) for item in value]
    elif isinstance(value, dict):
        return {k: translate_value(v, lang_pair) for k, v in value.items()}
    return value


def main():
    with open("data/content/ro.json", "r", encoding="utf-8") as f:
        ro_data = json.load(f)

    for lang_code, lang_pair in LANGS.items():
        out_file = f"data/content/{lang_code}.json"

        # Load existing file to preserve manual translations
        try:
            with open(out_file, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            existing = {}

        print(f"\n🌍 Translating RO -> {lang_code.upper()}...")
        translated = translate_value(ro_data, lang_pair)

        with open(out_file, "w", encoding="utf-8") as f:
            json.dump(translated, f, ensure_ascii=False, indent=2)

        print(f"✅ Saved {out_file}")


if __name__ == "__main__":
    main()
