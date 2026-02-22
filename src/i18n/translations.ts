// src/i18n/translations.ts

export type Lang = 'zh-Hant' | 'en';

export const translations = {
  'zh-Hant': {
    appTitle: '前端框架選擇器',
    quizTitle: '前端框架適性測驗',
    questionPrefix: '第',
    questionSuffix: '題',
    of: '/',
    resultTitle: '測驗結果',
    suitedForReact: '您更適合 React！',
    suitedForVue: '您更適合 Vue！',
    equallySuited: '您對 React 和 Vue 的適性相等！',
    reactScore: 'React 分數',
    vueScore: 'Vue 分數',
    answersReview: '答案回顧',
    restartQuiz: '重新開始測驗',
    progress: '進度',
    // Questions will be dynamically loaded, so no generic keys here
  },
  en: {
    appTitle: 'Frontend Framework Selector',
    quizTitle: 'Frontend Framework Aptitude Test',
    questionPrefix: 'Question',
    questionSuffix: '',
    of: '/',
    resultTitle: 'Quiz Result',
    suitedForReact: 'You are more suited for React!',
    suitedForVue: 'You are more suited for Vue!',
    equallySuited: 'You are equally suited for React and Vue!',
    reactScore: 'React Score',
    vueScore: 'Vue Score',
    answersReview: 'Answers Review',
    restartQuiz: 'Restart Quiz',
    progress: 'Progress',
    // Questions will be dynamically loaded, so no generic keys here
  },
} as const; // 'as const' for type inference

export type TranslationKeys = keyof (typeof translations)['en'];
