// src/components/QuestionCard.js
import React from "react";

function QuestionCard({ question, answers, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div>
        {answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
