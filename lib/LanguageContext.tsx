"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, LanguageCode } from "./translations";

type TranslationType = typeof translations.EN;

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("arcobau_lang") as LanguageCode;
    if (savedLang && Object.keys(translations).includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      // Default to EN or check browser language
      const browserLang = navigator.language.slice(0, 2).toUpperCase();
      if (Object.keys(translations).includes(browserLang)) {
        setLanguageState(browserLang as LanguageCode);
      }
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("arcobau_lang", lang);
  };

  const t = translations[language] || translations.EN;

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "EN", setLanguage, t: translations.EN }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
