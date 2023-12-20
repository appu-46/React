import { useState } from "react";
import BillInput from "./BillInput";
import TipInput from "./TipInput";
import Calculation from "./Calculation";
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

/*
// Coding Challenge 3 : Date counter V2
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleSlider() {}

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <input
        type="range"
        min={0}
        max={10}
        value={Number(step)}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      Step : {step}
      {/* <div>
        <button onClick={() => setStep((s) => s - 1)}> - </button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div> }
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <input type="text" placeholder={count} value={count} />
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
      <div>
        <button onClick={handleReset}> Reset </button>
      </div>
    </div>
  );
}
*/

/*
// Coding Excercise 1 : Accordian

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i + 1}
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={`Test 1`}
        key={`Test 1`}
        num={22}
      >
        <p>Allows React developers to: </p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  // console.log(key);
  function handlToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handlToggle}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
*/

export default function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipPercentage1, setTipPercentage1] = useState(0);

  function handleReset() {
    setBill(0);
    setTipPercentage(0);
    setTipPercentage1(0);
  }
  return (
    <>
      <div className="questions">
        <BillInput bill={bill} onSetBill={setBill}></BillInput>
        <TipInput
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        >
          How did you like the service?
        </TipInput>
        <TipInput
          tipPercentage={tipPercentage1}
          setTipPercentage={setTipPercentage1}
        >
          How did your friend like the service?
        </TipInput>
      </div>
      <div className="calculation">
        <Calculation
          bill={bill}
          tipPercentage={(tipPercentage + tipPercentage1) / 2}
        />
      </div>
      <div>
        <button className="button" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </>
  );
}
