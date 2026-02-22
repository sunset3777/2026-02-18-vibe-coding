// src/i18n/context.ts
import { createContext } from 'react';
import type { Lang, TranslationKeys } from './translations';

export interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKeys) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);
