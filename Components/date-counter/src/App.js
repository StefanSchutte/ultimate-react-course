import { useState } from "react";
import "./styles.css";

/**
 * Represents the main application component.
 * @returns {JSX.Element} The JSX element representing the application.
 */
export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

/**
 * Represents a counter component.
 * @returns {JSX.Element} The JSX element representing the counter.
 */
function Counter() {
    /**
     * State variable to hold the count value.
     * @type {[number, function]} Array containing the count value and its setter function.
     */
    const [count, setCount] = useState(0);
    /**
     * State variable to hold the step value.
     * @type {[number, function]} Array containing the step value and its setter function.
     */
    const [step, setStep] = useState(1);
    /**
     * Date object representing the calculated date.
     * @type {Date}
     */
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    return (
        <div>
            <div>
                <button onClick={() => setStep((c) => c - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep((c) => c + 1)}>+</button>
            </div>

            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount((c) => c + step)}>+</button>
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
