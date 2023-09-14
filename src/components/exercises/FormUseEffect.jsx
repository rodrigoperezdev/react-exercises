import { useEffect, useState } from "react";
import { Header } from "../UI/Header";

export const FormUseEffect = () => {
  const [formInput, setFormInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (formInput === "Hello!") {
      setIsValid(true);
    } else {
      if (isValid) {
        setIsValid(false);
      }
    }
  }, [formInput]);

  return (
    <Header>
      <div className="container ">
        <div className="row text-center  vh-100 align-content-center align-items-center">
          <div className="row">
            <h1>useEffect Form input validation</h1>
            <p>
              Write a word in the text input below, if the word equals{" "}
              <strong>Hello!</strong> it will be a valid word.
            </p>
          </div>
          <div className="row mt-5">
            <h5 className="mb-3">Input</h5>
            <div className="mx-auto" id="input-useEffect">
              {isValid ? (
                <div>
                  <input
                    placeholder="Your word here"
                    type="text"
                    className="text p-2 rounded border form-control is-valid"
                    onChange={(e) => setFormInput(e.target.value)}
                    value={formInput}
                  />
                  <div className="valid-feedback text-start">You got it!</div>
                </div>
              ) : (
                <div>
                  <input
                    placeholder="Your word here"
                    type="text"
                    className="text p-2 rounded form-control is-invalid"
                    onChange={(e) => setFormInput(e.target.value)}
                    value={formInput}
                  />
                  <div className="invalid-feedback text-start">
                    That's not the word!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};
