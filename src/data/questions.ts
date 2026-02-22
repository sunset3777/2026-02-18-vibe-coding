// src/data/questions.ts
import type { Lang } from '../i18n/translations';

export type Option = {
  label: Record<Lang, string>; // Localized label
  score: { react: number; vue: number };
  reasonKey: string;
};

export type Question = {
  id: number;
  text: Record<Lang, string>; // Localized text
  options: [Option, Option];
};

export const questions: Question[] = [
  {
    id: 1,
    text: {
      'zh-Hant': '您喜歡專注於純粹 UI 的函式庫，還是功能齊全的框架？',
      en: 'Do you prefer a library that focuses purely on UI or a full-fledged framework?',
    },
    options: [
      {
        label: {
          'zh-Hant': '純粹 UI 函式庫（高靈活性）',
          en: 'Pure UI library (flexibility)',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_ui_library',
      },
      {
        label: {
          'zh-Hant': '功能齊全的框架（意見導向）',
          en: 'Full-fledged framework (opinionated)',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_framework',
      },
    ],
  },
  {
    id: 2,
    text: {
      'zh-Hant': '您喜歡 JSX 語法，還是偏好 HTML 般的模板？',
      en: 'Are you comfortable with JSX or prefer HTML-like templates?',
    },
    options: [
      {
        label: { 'zh-Hant': 'JSX（JavaScript XML）', en: 'JSX (JavaScript XML)' },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_jsx',
      },
      {
        label: {
          'zh-Hant': 'HTML 般的模板（單一檔案組件）',
          en: 'HTML-like templates (single file components)',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_templates',
      },
    ],
  },
  {
    id: 3,
    text: {
      'zh-Hant': '您是否看重龐大的生態系和社群支援，即使可能較為零散？',
      en: 'Do you value a large ecosystem and community support, even if fragmented?',
    },
    options: [
      {
        label: {
          'zh-Hant': '龐大生態系（零散但強大）',
          en: 'Large ecosystem (fragmented, but powerful)',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_ecosystem',
      },
      {
        label: {
          'zh-Hant': '受管理的生態系（更具凝聚力）',
          en: 'Managed ecosystem (more cohesive)',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_ecosystem',
      },
    ],
  },
  {
    id: 4,
    text: {
      'zh-Hant': '您對於學習 Hooks 這樣的新模式有何看法？',
      en: 'How do you feel about learning new patterns like Hooks?',
    },
    options: [
      {
        label: {
          'zh-Hant': '樂於學習新模式（Hooks）',
          en: 'Excited to learn new patterns (Hooks)',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_hooks',
      },
      {
        label: {
          'zh-Hant': '偏好更傳統的物件導向模式',
          en: 'Prefer more traditional object-oriented patterns',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_traditional',
      },
    ],
  },
  {
    id: 5,
    text: {
      'zh-Hant': '您喜歡使用外部狀態管理函式庫（如 Redux），還是內建解決方案（如 Pinia, Vuex）？',
      en: 'Do you prefer managing state with external libraries (e.g., Redux) or built-in solutions (e.g., Pinia, Vuex)?',
    },
    options: [
      {
        label: {
          'zh-Hant': '外部狀態管理函式庫',
          en: 'External state management libraries',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_external_state',
      },
      {
        label: {
          'zh-Hant': '內建、意見導向的狀態管理',
          en: 'Built-in, opinionated state management',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_built_in_state',
      },
    ],
  },
  {
    id: 6,
    text: {
      'zh-Hant': '您對專案設定和樣板的偏好是什麼？',
      en: "What's your preference for project setup and boilerplate?",
    },
    options: [
      {
        label: {
          'zh-Hant': '最少樣板，更多設定自由度',
          en: 'Minimal boilerplate, more configuration freedom',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_minimal_boilerplate',
      },
      {
        label: {
          'zh-Hant': '更多樣板，依循慣例快速啟動',
          en: 'More boilerplate, quicker start with conventions',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_more_boilerplate',
      },
    ],
  },
  {
    id: 7,
    text: {
      'zh-Hant': '向後相容性對您有多重要？',
      en: 'How important is backward compatibility to you?',
    },
    options: [
      {
        label: {
          'zh-Hant': '快速迭代，擁抱變化，較不嚴格的向後相容性',
          en: 'Fast-moving, embraces change, less strict backward compatibility',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_fast_moving',
      },
      {
        label: {
          'zh-Hant': '更循序漸進，重視向後相容性',
          en: 'More progressive, values backward compatibility',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_progressive',
      },
    ],
  },
  {
    id: 8,
    text: {
      'zh-Hant': '您喜歡 CSS-in-JS 解決方案，還是傳統 CSS/作用域 CSS？',
      en: 'Do you prefer CSS-in-JS solutions or traditional CSS/scoped CSS?',
    },
    options: [
      {
        label: {
          'zh-Hant': 'CSS-in-JS（例如 Styled Components）',
          en: 'CSS-in-JS (e.g., Styled Components)',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_css_in_js',
      },
      {
        label: {
          'zh-Hant': '作用域 CSS、CSS Modules（內建支援）',
          en: 'Scoped CSS, CSS Modules (built-in support)',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_scoped_css',
      },
    ],
  },
];
