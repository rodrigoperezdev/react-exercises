import { useReducer } from "react";
import { Header } from "../UI/Header";

export const UseReducerCounter = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_COUNTER":
        return parseInt(state) + action.payload;

      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(counterReducer, 0);

  const handleCounter = (value) => {
    dispatch({ type: "HANDLE_COUNTER", payload: value });
  };

  return (
    <Header>
      <div className="container">
        <div className="row justify-content-center vh-100 align-content-center align-items-center">
          <div className="col-10">
            <h1>Counter using useReducer hook</h1>
            <p>
              Your old <strong>React counter</strong> but using a useReducer
              hook just to handle a more complex state with a reducer instead of
              using 3 useState hooks
            </p>
          </div>
          <div className="row mt-5 mb-3">
            <h3 className="p-2 d-inline-block text-center">{counter}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn-group ">
              <div className="col">
                <button className="btn" onClick={() => handleCounter(1)}>
                  +1
                </button>
              </div>
              <div className="col">
                <button className="ms-3 btn" onClick={() => handleCounter(-1)}>
                  -1
                </button>
              </div>
              <div className="col">
                <button className="ms-3 btn" onClick={() => handleCounter(5)}>
                  +5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};
