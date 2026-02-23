// src/components/Quiz.tsx
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allQuestions } from '../data/questions'; // Renamed import
import type { Option, Question } from '../data/questions';
import { useI18n } from '../i18n/useI18n';
import { shuffle } from '../utils/shuffle'; // Import shuffle utility

type Answer = {
  questionId: number;
  chosenLabel: string;
  reasonKey: string;
  score: { react: number; vue: number };
};

// Fixed number of questions per quiz session
const QUIZ_QUESTION_COUNT = 8;

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [reactScore, setReactScore] = useState(0);
  const [vueScore, setVueScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false); // Lock for rapid clicks

  const [quizQuestions, setQuizQuestions] = useState<Question[]>(() => {
    // Initialize quiz questions once on first render using lazy initializer
    const shuffledAllQuestions = shuffle([...allQuestions]);
    const sampledQuestions = shuffledAllQuestions.slice(0, QUIZ_QUESTION_COUNT);
    const questionsWithShuffledOptions = sampledQuestions.map((q) => ({
      ...q,
      options: shuffle([...q.options]) as [Option, Option], // Cast to fixed tuple size
    }));
    return questionsWithShuffledOptions;
  });

  const { lang, t } = useI18n();

  const totalQuestions = quizQuestions.length; // Now based on sampled questions
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  const initializeQuiz = useCallback(() => {
    // This now only handles subsequent restarts
    const shuffledAllQuestions = shuffle([...allQuestions]);
    const sampledQuestions = shuffledAllQuestions.slice(0, QUIZ_QUESTION_COUNT);
    const questionsWithShuffledOptions = sampledQuestions.map((q) => ({
      ...q,
      options: shuffle([...q.options]) as [Option, Option],
    }));
    setQuizQuestions(questionsWithShuffledOptions);
    setCurrentQuestionIndex(0);
    setReactScore(0);
    setVueScore(0);
    setAnswers([]);
    setShowResult(false);
    setIsAnswering(false);
  }, []); // Dependencies are stable

  const restartQuiz = () => {
    initializeQuiz();
  };

  const handleAnswer = (question: Question, selectedOption: Option) => {
    if (isAnswering) return; // Prevent rapid clicks
    setIsAnswering(true);

    setReactScore((prevScore) => prevScore + selectedOption.score.react);
    setVueScore((prevScore) => prevScore + selectedOption.score.vue);

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        questionId: question.id,
        chosenLabel: selectedOption.label[lang],
        reasonKey: selectedOption.reasonKey,
        score: selectedOption.score,
      },
    ]);

    // Delay to allow for animation or to prevent immediate next question
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setIsAnswering(false); // Unlock for next question
      } else {
        setShowResult(true);
        setIsAnswering(false); // Unlock for result screen
      }
    }, 500); // 500ms delay
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

  // Render nothing until questions are initialized (should be immediate with lazy initializer)
  // This check is mainly for initial empty array state before lazy initializer runs.
  if (quizQuestions.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Loading Quiz...
      </motion.div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion.id} // Key to trigger AnimatePresence transitions
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              {t('questionPrefix')} {currentQuestionIndex + 1} {t('of')} {totalQuestions}
              {t('questionSuffix')}
            </h1>
            <p className="question-text">{currentQuestion.text[lang]}</p>
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion, option)}
                  disabled={isAnswering} // Disable buttons during answer processing
                >
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
