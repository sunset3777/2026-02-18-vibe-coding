// src/components/Quiz.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import type { Option, Question } from '../data/questions'; // Still need these types
import { useI18n } from '../i18n/useI18n';

type Answer = {
  questionId: number;
  chosenLabel: string; // This will store the label in the language it was chosen
  reasonKey: string;
  score: { react: number; vue: number };
};

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [reactScore, setReactScore] = useState(0);
  const [vueScore, setVueScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const { lang, setLang, t } = useI18n();

  const totalQuestions = questions.length;
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setReactScore(0);
    setVueScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (question: Question, selectedOption: Option) => {
    setReactScore((prevScore) => prevScore + selectedOption.score.react);
    setVueScore((prevScore) => prevScore + selectedOption.score.vue);

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        questionId: question.id,
        chosenLabel: selectedOption.label[lang], // Store the chosen label in the current language
        reasonKey: selectedOption.reasonKey,
        score: selectedOption.score,
      },
    ]);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const renderResult = () => {
    let recommendationText: string;
    let recommendationClass: string;

    if (reactScore > vueScore) {
      recommendationText = t('suitedForReact');
      recommendationClass = 'react-recommendation';
    } else if (vueScore > reactScore) {
      recommendationText = t('suitedForVue');
      recommendationClass = 'vue-recommendation';
    } else {
      recommendationText = t('equallySuited');
      recommendationClass = 'equal-recommendation';
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="result-container"
      >
        <div className="language-toggle-container">
          <button onClick={() => setLang('zh-Hant')} disabled={lang === 'zh-Hant'}>
            繁體中文
          </button>
          <button onClick={() => setLang('en')} disabled={lang === 'en'}>
            English
          </button>
        </div>

        <h1>{t('resultTitle')}</h1>
        <h2 className={recommendationClass}>{recommendationText}</h2>
        <p className="result-score">
          {t('reactScore')}: {reactScore} {t('of')} {totalQuestions}
        </p>
        <p className="result-score">
          {t('vueScore')}: {vueScore} {t('of')} {totalQuestions}
        </p>

        <h3>{t('answersReview')}</h3>
        <ul className="answers-list">
          {answers.map((a) => (
            <li key={a.questionId}>
              {t('questionPrefix')} {a.questionId}: {a.chosenLabel}
            </li>
          ))}
        </ul>
        <button onClick={restartQuiz}>{t('restartQuiz')}</button>
      </motion.div>
    );
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="language-toggle-container">
        <button onClick={() => setLang('zh-Hant')} disabled={lang === 'zh-Hant'}>
          繁體中文
        </button>
        <button onClick={() => setLang('en')} disabled={lang === 'en'}>
          English
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              {t('questionPrefix')} {currentQuestion.id} {t('of')} {totalQuestions}
              {t('questionSuffix')}
            </h1>
            <p className="question-text">{currentQuestion.text[lang]}</p>
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(currentQuestion, option)}>
                  {option.label[lang]}
                </button>
              ))}
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p>
              {t('progress')}: {Math.round(progress)}%
            </p>
          </motion.div>
        ) : (
          renderResult()
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
