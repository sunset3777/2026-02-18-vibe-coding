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

export const allQuestions: Question[] = [
  // Renamed to allQuestions
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
  // New questions starting from here (total 16 for now)
  {
    id: 9,
    text: {
      'zh-Hant': '您喜歡在開發時有更多的自由度，還是更喜歡內建的約定？',
      en: 'Do you prefer more freedom during development or built-in conventions?',
    },
    options: [
      {
        label: { 'zh-Hant': '更多的自由度', en: 'More freedom' },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_freedom',
      },
      {
        label: { 'zh-Hant': '內建的約定', en: 'Built-in conventions' },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_conventions',
      },
    ],
  },
  {
    id: 10,
    text: {
      'zh-Hant': '您對於模板語法和邏輯分離的偏好是什麼？',
      en: 'What is your preference for template syntax and logic separation?',
    },
    options: [
      {
        label: { 'zh-Hant': 'JS/TS 中的模板（JSX/TSX）', en: 'Templates in JS/TS (JSX/TSX)' },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_template_js',
      },
      {
        label: {
          'zh-Hant': '獨立的 HTML 模板和 JS 邏輯',
          en: 'Separate HTML templates and JS logic',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_template_html',
      },
    ],
  },
  {
    id: 11,
    text: {
      'zh-Hant': '您在選擇解決方案時，更看重其成熟度和市場佔有率，還是其新穎性和技術前瞻性？',
      en: 'When choosing a solution, do you value maturity and market share more, or novelty and technological foresight?',
    },
    options: [
      {
        label: { 'zh-Hant': '成熟度和市場佔有率', en: 'Maturity and market share' },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_maturity',
      },
      {
        label: { 'zh-Hant': '新穎性和技術前瞻性', en: 'Novelty and technological foresight' },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_novelty',
      },
    ],
  },
  {
    id: 12,
    text: {
      'zh-Hant': '您對於工具鏈的自動化程度有何偏好？',
      en: 'What is your preference for the level of automation in the tooling ecosystem?',
    },
    options: [
      {
        label: { 'zh-Hant': '高自動化，內建配置', en: 'Highly automated, built-in configurations' },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_automation',
      },
      {
        label: {
          'zh-Hant': '較少自動化，更多手動配置空間',
          en: 'Less automated, more manual configuration',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_manual_config',
      },
    ],
  },
  {
    id: 13,
    text: {
      'zh-Hant': '您更喜歡由一家公司主導的專案，還是由社區驅動的專案？',
      en: 'Do you prefer a project led by a single company or a community-driven project?',
    },
    options: [
      {
        label: { 'zh-Hant': '社區驅動', en: 'Community-driven' },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_community_driven',
      },
      {
        label: { 'zh-Hant': '公司主導', en: 'Company-led' },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_company_led',
      },
    ],
  },
  {
    id: 14,
    text: {
      'zh-Hant': '對於響應式設計，您傾向於使用基於屬性的解決方案，還是更喜歡 CSS 預處理器？',
      en: 'For responsive design, do you lean towards property-based solutions or prefer CSS preprocessors?',
    },
    options: [
      {
        label: {
          'zh-Hant': '基於屬性（如 Tailwind CSS）',
          en: 'Property-based (e.g., Tailwind CSS)',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_tailwind',
      },
      {
        label: {
          'zh-Hant': 'CSS 預處理器（如 SASS, LESS）',
          en: 'CSS preprocessors (e.g., SASS, LESS)',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_preprocessors',
      },
    ],
  },
  {
    id: 15,
    text: {
      'zh-Hant': '您對於抽象化層級的偏好是什麼？',
      en: 'What is your preference for the level of abstraction?',
    },
    options: [
      {
        label: {
          'zh-Hant': '較低的抽象化，更多底層控制',
          en: 'Lower abstraction, more low-level control',
        },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_low_abstraction',
      },
      {
        label: {
          'zh-Hant': '較高的抽象化，更多開箱即用的功能',
          en: 'Higher abstraction, more out-of-the-box features',
        },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_high_abstraction',
      },
    ],
  },
  {
    id: 16,
    text: {
      'zh-Hant': '您喜歡在大型應用程式中使用單一入口點，還是更喜歡模組化的、可組合的組件？',
      en: 'Do you prefer a single entry point for large applications or a modular, composable component approach?',
    },
    options: [
      {
        label: { 'zh-Hant': '模組化的、可組合的組件', en: 'Modular, composable components' },
        score: { react: 1, vue: 0 },
        reasonKey: 'react_modular',
      },
      {
        label: { 'zh-Hant': '單一入口點，整體性強', en: 'Single entry point, strong integrity' },
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_single_entry',
      },
    ],
  },
];
