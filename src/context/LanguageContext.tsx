'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LANGUAGES, TRANSLATIONS, LanguageOption } from '@/lib/i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  currentLangObj: LanguageOption;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = (localStorage.getItem('aytd_lang') || localStorage.getItem('ytultra_lang')) as Language;
      if (saved && TRANSLATIONS[saved]) {
        setLangState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('aytd_lang', newLang);
      const opt = LANGUAGES.find((l) => l.code === newLang);
      if (opt) {
        document.documentElement.dir = opt.dir;
        document.documentElement.lang = opt.code;
      }
    } catch {
      // ignore
    }
  };

  const currentLangObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const t = (key: string): string => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, currentLangObj, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
