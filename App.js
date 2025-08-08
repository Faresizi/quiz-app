import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import './App.css';


const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "2"],
    correct: "4",
  },
  {
    question: "Who lives in a pineapple under the sea?",
    answers: ["Patrick", "Squidward", "Sandy", "SpongeBob"],
    correct: "SpongeBob",
  },
   {
    question: "What number messi was wearing in barcelona?",
    answers: ["33", "12", "10", "22"],
    correct: "10",
  },
   {
    question: "Which planet is known as the Red Planet?",
    answers: ["venus", "mars", "jupiter", "earth"],
    correct: "mars",
  },
   {
    question: "What is the only letter not used in any U.S. state name?",
    answers: ["Q", "X", "Z", "J"],
    correct: "mars",
  },

];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct) {
      setScore(score + 1);
    }

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="app">
      <h1>Quiz Game</h1>
      {isFinished ? (
        <h2>Your Score: {score} / {questions.length}</h2>
      ) : (
        <QuestionCard
          question={questions[currentIndex].question}
          answers={questions[currentIndex].answers}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
