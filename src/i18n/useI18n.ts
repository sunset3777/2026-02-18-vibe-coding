// src/i18n/useI18n.ts
import { useContext } from 'react';
import { I18nContext } from './context';
import type { I18nContextType } from './context'; // Correct import

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
