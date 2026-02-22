// src/data/questions.ts
export type Option = {
  label: string;
  score: { react: number; vue: number };
  reasonKey: string;
};

export type Question = {
  id: number;
  text: string;
  options: [Option, Option];
};

export const questions: Question[] = [
  {
    id: 1,
    text: 'Do you prefer a library that focuses purely on UI or a full-fledged framework?',
    options: [
      {
        label: 'Pure UI library (flexibility)',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_ui_library',
      },
      {
        label: 'Full-fledged framework (opinionated)',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_framework',
      },
    ],
  },
  {
    id: 2,
    text: 'Are you comfortable with JSX or prefer HTML-like templates?',
    options: [
      { label: 'JSX (JavaScript XML)', score: { react: 1, vue: 0 }, reasonKey: 'react_jsx' },
      {
        label: 'HTML-like templates (single file components)',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_templates',
      },
    ],
  },
  {
    id: 3,
    text: 'Do you value a large ecosystem and community support, even if fragmented?',
    options: [
      {
        label: 'Large ecosystem (fragmented, but powerful)',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_ecosystem',
      },
      {
        label: 'Managed ecosystem (more cohesive)',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_ecosystem',
      },
    ],
  },
  {
    id: 4,
    text: 'How do you feel about learning new patterns like Hooks?',
    options: [
      {
        label: 'Excited to learn new patterns (Hooks)',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_hooks',
      },
      {
        label: 'Prefer more traditional object-oriented patterns',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_traditional',
      },
    ],
  },
  {
    id: 5,
    text: 'Do you prefer managing state with external libraries (e.g., Redux) or built-in solutions (e.g., Pinia, Vuex)?',
    options: [
      {
        label: 'External state management libraries',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_external_state',
      },
      {
        label: 'Built-in, opinionated state management',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_built_in_state',
      },
    ],
  },
  {
    id: 6,
    text: "What's your preference for project setup and boilerplate?",
    options: [
      {
        label: 'Minimal boilerplate, more configuration freedom',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_minimal_boilerplate',
      },
      {
        label: 'More boilerplate, quicker start with conventions',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_more_boilerplate',
      },
    ],
  },
  {
    id: 7,
    text: 'How important is backward compatibility to you?',
    options: [
      {
        label: 'Fast-moving, embraces change, less strict backward compatibility',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_fast_moving',
      },
      {
        label: 'More progressive, values backward compatibility',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_progressive',
      },
    ],
  },
  {
    id: 8,
    text: 'Do you prefer CSS-in-JS solutions or traditional CSS/scoped CSS?',
    options: [
      {
        label: 'CSS-in-JS (e.g., Styled Components)',
        score: { react: 1, vue: 0 },
        reasonKey: 'react_css_in_js',
      },
      {
        label: 'Scoped CSS, CSS Modules (built-in support)',
        score: { react: 0, vue: 1 },
        reasonKey: 'vue_scoped_css',
      },
    ],
  },
];
