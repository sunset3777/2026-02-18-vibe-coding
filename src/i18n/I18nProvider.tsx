// src/i18n/I18nProvider.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { translations } from './translations';
import type { Lang, TranslationKeys } from './translations';
import { I18nContext } from './context';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    // Read from localStorage on initial load, default to 'zh-Hant'
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang');
      return (storedLang === 'zh-Hant' || storedLang === 'en' ? storedLang : 'zh-Hant') as Lang;
    }
    return 'zh-Hant';
  });

  useEffect(() => {
    // Persist language selection to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const t = useCallback(
    (key: TranslationKeys): string => {
      // Fallback to English if key not found in current language (shouldn't happen with `as const`)
      return translations[lang][key] || translations.en[key];
    },
    [lang],
  );

  const contextValue = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
};
