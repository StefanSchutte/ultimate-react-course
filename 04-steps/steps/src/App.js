import { useState } from "react";

/**
 * Array of messages corresponding to each step.
 * @type {string[]}
 */
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

/**
 * Main component of the application.
 * Renders steps, step messages, and navigation buttons.
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

/**
 * Component representing the steps, including navigation buttons.
 * @returns {JSX.Element} The rendered component.
 */
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

    /**
     * Handles the navigation to the previous step.
     */
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

    /**
     * Handles the navigation to the next step.
     */
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Component representing the message for a specific step.
 * @param {Object} props - The props passed to the component.
 * @param {number} props.step - The current step number.
 * @param {JSX.Element[]} props.children - The child components to render.
 * @returns {JSX.Element} The rendered component.
 */
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

/**
 * Component representing a button.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.textColor - The color of the button text.
 * @param {string} props.bgColor - The background color of the button.
 * @param {Function} props.onClick - The function to call on button click.
 * @param {JSX.Element[]} props.children - The child components to render within the button.
 * @returns {JSX.Element} The rendered button component.
 */
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
