// src/components/LanguageToggle.tsx
import React from 'react';
import { useI18n } from '../i18n/useI18n';

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="language-toggle-container">
      <button onClick={() => setLang('zh-Hant')} disabled={lang === 'zh-Hant'}>
        繁體中文
      </button>
      <button onClick={() => setLang('en')} disabled={lang === 'en'}>
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
