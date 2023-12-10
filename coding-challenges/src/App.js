import { useState } from "react";
import "./App.css";

// Coding challenge 1
/*
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}> - </button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        Count: {count}
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
*/

// Coding challenge 2
/*
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}
function FlashCards() {
  const [selectedID, setQuestionId] = useState(null);

  function handlClick(e) {
    console.log(e);
    setQuestionId(e);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedID ? "selected" : ""}
          onClick={() => handlClick(question.id)}
        >
          {question.id === selectedID ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}
*/
