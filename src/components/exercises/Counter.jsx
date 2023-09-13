import { useState } from "react";

import Button from "react-bootstrap/Button";
import { Header } from "../UI/Header";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <Header>
        <div className="container-fluid">
          <div className="row text-center  vh-100 align-content-center align-items-center">
            <h1 className="mb-3">React counter</h1>
            <div className="d-flex">
              <h4 className="my-3 border mx-auto py-3 px-4 rounded">
                {counter}
              </h4>
            </div>
            <div className="mt-4">
              <div>
                <button
                  className="btn me-2"
                  onClick={() => setCounter(counter - 1)}
                >
                  Substract
                </button>
                <Button
                  variant="light me-2"
                  onClick={() => setCounter(counter + 1)}
                >
                  Add
                </Button>
                <Button
                  variant="btn-outline me-2"
                  onClick={() => setCounter(counter + 2)}
                >
                  Add +2
                </Button>
              </div>
              <div className="mt-5 mb-3 pb-3">
                <h5>Add or substract your desired number</h5>
              </div>
              <div className="d-flex text-center justify-content-center">
                <Button
                  className="btn"
                  onClick={() => setCounter(counter + parseInt(inputValue))}
                >
                  {inputValue > -1
                    ? `Add ${inputValue}`
                    : `Substract ${inputValue}`}
                </Button>
                <input
                  className="text-center rounded ms-3"
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
