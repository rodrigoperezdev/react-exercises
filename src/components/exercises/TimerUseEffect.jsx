import { useEffect, useState } from "react";
import { Header } from "../UI/Header";

export const TimerUseEffect = () => {
  const [miliSecond, setMiliSecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let intervalRef = null;

  useEffect(() => {
    if (isActive) {
      intervalRef = setInterval(() => {
        setMiliSecond((prev) => (prev === 99 ? 0 : prev + 1));
      }, 1);
    } else {
      clearInterval(intervalRef);
    }

    return () => {
      clearInterval(intervalRef);
    };
  }, [isActive]);

  useEffect(() => {
    if (miliSecond === 99) {
      setSecond((prev) => prev + 1);
    }
  }, [miliSecond]);

  useEffect(() => {
    if (second === 59) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
  }, [second]);

  const handleReset = () => {
    setSecond(0);
    setMiliSecond(0);
    setMinute(0);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <Header>
      <div className="container">
        <div className="row text-center vh-100 justify-content-center align-content-center ">
          <div className="text-center">
            <h1 className="text-light">useEffect Chronometer</h1>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <h5 className="text-light chronometer-time">
              {formatTime(minute)} : {formatTime(second)} :{" "}
              {formatTime(miliSecond)}
            </h5>
          </div>
          <div className="mt-5">
            {!isActive ? (
              <>
                <button
                  className="btn btn-light"
                  onClick={() => setIsActive(true)}
                >
                  Start
                </button>
              </>
            ) : (
              <>
                <button className="btn" onClick={() => setIsActive(false)}>
                  Stop
                </button>
              </>
            )}
            <button className="btn ms-3" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </Header>
  );
};
