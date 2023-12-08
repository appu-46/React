import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "❓❓❓ ",
  "Profit 🤑🤑🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(arr);
  // const step = 1;
  function handlePrevious() {
    if (step > 0) setStep(step - 1);
    // alert("previous");
  }

  function handleNext() {
    if (step < messages.length) setStep(step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("test")}
              // onClick={() => alert("TEST")}
            >
              ⬅️ Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next ➡️
            </button>
          </div>
        </div>
      )}
    </>
  );
}
