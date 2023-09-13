import { useState, useMemo } from "react";
import { Header } from "../UI/Header";

export const FactorialUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [renders, setRenders] = useState(0);
  const [input, setInput] = useState("");

  const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    setRenders((prev) => prev + 1);
    return result;
  };

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <Header>
      <div className="row mb-5 vh-100 align-content-center justify-content-center">
        <div>
          <h1>Factorial Calculator with useMemo</h1>
          <p className="pt-2">
            useMemo hook allows optimizing our app's performance by
            <strong> memoizing the result</strong> of a costly calculation
            function. It prevents unnecessary renders and optimizes child
            components re-renders.
            <br />
            <br />
            In this case there are two inputs, the one that calculates the
            factorial when it's value changes and it causes the factorial
            function to work and therefore, re-render its value. The other input
            doesn't do anything but to change it's value with a use state hook.
            If there wasn't a use memo hook to memoize the value the factorial
            function would be re-rendering the factorial everytime any component
            changes.
          </p>
        </div>
        <div>
          <div className="row text-center mt-4">
            <div className="col">
              <p>Enter a number to calculate its factorial:</p>
              <div className="mb-3">
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(parseInt(e.target.value))}
                />
              </div>
              <p>
                Factorial of {number} is: <strong>{factorial}</strong>
              </p>
            </div>
            <div className="col">
              <p>Write anything in the input below</p>
              <div className="mb-3">
                <input
                  type="text"
                  value={input}
                  placeholder="Write anything"
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row text-center py-5">
            <h4>
              Times the factorial function is called: <strong>{renders}</strong>{" "}
              times
            </h4>
          </div>
        </div>
      </div>
    </Header>
  );
};
