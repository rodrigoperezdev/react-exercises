import { useRef } from "react";
import { Header } from "../UI/Header";

export const FocusUseRef = () => {
  const inputs = [1, 2, 3, 4];

  const focusInputRefs = inputs.map(() => useRef());

  const focus = (key) => {
    const index = key - 1;
    focusInputRefs[index].current.focus();
  };

  return (
    <Header>
      <div className="container">
        <div className="row text-center  vh-100 align-content-center align-items-center">
          <div className="row ">
            <h1>Focus exercise with useRef</h1>
            <h4>
              Focus on any numbered input by clicking its corresponding numbered
              button.
            </h4>
          </div>
          <div className="row flex-wrap mt-5">
            {inputs.map((input, index) => (
              <div
                className="col p-2 d-flex justify-content-center align-items-center flex-column"
                key={input}
              >
                <input
                  type="text"
                  className="focus-use-ref__input rounded"
                  ref={focusInputRefs[index]}
                />
                <span className="mt-2">{input}</span>
              </div>
            ))}
          </div>
          <div className="row flex-wrap mt-5">
            {inputs.map((input) => (
              <div className="col d-flex justify-content-center" key={input}>
                <button className={"btn"} onClick={() => focus(input)}>
                  Focus input {input}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Header>
  );
};
