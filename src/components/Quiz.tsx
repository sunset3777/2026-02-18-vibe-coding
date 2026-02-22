// src/components/Quiz.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import type { Option, Question } from '../data/questions';

type Answer = {
  questionId: number;
  chosenLabel: string;
  reasonKey: string;
  score: { react: number; vue: number };
};

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [reactScore, setReactScore] = useState(0);
  const [vueScore, setVueScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);

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
        chosenLabel: selectedOption.label,
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
    let recommendation = '';
    let recommendationClass = '';
    if (reactScore > vueScore) {
      recommendation = 'React';
      recommendationClass = 'react-recommendation';
    } else if (vueScore > reactScore) {
      recommendation = 'Vue';
      recommendationClass = 'vue-recommendation';
    } else {
      recommendation = 'React and Vue (equally)';
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
        <h1>Quiz Result</h1>
        <h2 className={recommendationClass}>You are more suited for {recommendation}!</h2>
        <p className="result-score">
          React Score: {reactScore} / {totalQuestions}
        </p>
        <p className="result-score">
          Vue Score: {vueScore} / {totalQuestions}
        </p>

        <h3>Answers Review</h3>
        <ul className="answers-list">
          {answers.map((a) => (
            <li key={a.questionId}>
              Q{a.questionId}: {a.chosenLabel}
            </li>
          ))}
        </ul>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </motion.div>
    );
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
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
              Question {currentQuestion.id} / {totalQuestions}
            </h1>
            <p className="question-text">{currentQuestion.text}</p>
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(currentQuestion, option)}>
                  {option.label}
                </button>
              ))}
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p>Progress: {Math.round(progress)}%</p>
          </motion.div>
        ) : (
          renderResult()
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
