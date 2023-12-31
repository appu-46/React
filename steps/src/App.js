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
    if (step > 0) setStep((s) => s - 1);
    // alert("previous");
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              onClick={handlePrevious}
            >
              <span>⬅️</span> Previous
            </Button>

            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
              Next <span>➡️ </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
