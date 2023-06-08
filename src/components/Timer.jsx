import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setMinutes(0);
    setSeconds(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  return (
    <div className="timer">
      <div className="timer_inner">
        <h1>Stop Watch</h1>
        <h2>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h2>
        <div className="btn">
          <button className="btn1" onClick={restart}>
            Restart
          </button>

          <button className="btn2" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
