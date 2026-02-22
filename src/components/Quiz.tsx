// src/components/Quiz.tsx
import React, { useState } from 'react';
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

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const renderResult = () => {
    if (reactScore > vueScore) {
      return <h2>You are more suited for React!</h2>;
    } else if (vueScore > reactScore) {
      return <h2>You are more suited for Vue!</h2>;
    } else {
      return <h2>You are equally suited for React and Vue!</h2>;
    }
  };

  if (showResult) {
    return (
      <div>
        <h1>Quiz Result</h1>
        {renderResult()}
        <p>React Score: {reactScore}</p>
        <p>Vue Score: {vueScore}</p>
        <h3>Answers</h3>
        <ul>
          {answers.map((a) => (
            <li key={a.questionId}>
              Q{a.questionId}: {a.chosenLabel}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Question {currentQuestion.id}</h1>
      <p>{currentQuestion.text}</p>
      <div>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(currentQuestion, option)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
