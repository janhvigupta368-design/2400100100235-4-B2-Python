import React, { useState, useEffect } from "react";

import "../styles.css";

function Stopwatch() {

  const [darkMode, setDarkMode] = useState(false);

  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);

  const [laps, setLaps] = useState([]);

  // TIMER

  useEffect(() => {

    let interval;

    if(running){

      interval = setInterval(() => {

        setTime(prev => prev + 10);

      }, 10);
    }

    return () => clearInterval(interval);

  }, [running]);

  // FORMAT TIME

  const formatTime = () => {

    const hours =
      Math.floor(time / 3600000);

    const minutes =
      Math.floor((time % 3600000) / 60000);

    const seconds =
      Math.floor((time % 60000) / 1000);

    const milliseconds =
      Math.floor((time % 1000) / 10);

    return (
      `${String(hours).padStart(2,"0")}:` +
      `${String(minutes).padStart(2,"0")}:` +
      `${String(seconds).padStart(2,"0")}:` +
      `${String(milliseconds).padStart(2,"0")}`
    );
  };

  // RESET

  const resetTimer = () => {

    setRunning(false);

    setTime(0);

    setLaps([]);
  };

  // LAP

  const addLap = () => {

    if(time !== 0){

      setLaps([
        ...laps,
        formatTime()
      ]);
    }
  };

  return (

    <div className={darkMode ? "stopwatch-page dark" : "stopwatch-page"}>

      {/* THEME BUTTON */}

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* BLOBS */}

      <div className="blob blob1"></div>

      <div className="blob blob2"></div>

      {/* STOPWATCH CARD */}

      <div className="stopwatch-card">

        {/* LOGO */}

        <div className="stopwatch-logo">
          ⏱
        </div>

        <h1>Premium Stopwatch</h1>

        {/* TIMER */}

        <div
          className={
            running
            ? "stopwatch-display active"
            : "stopwatch-display"
          }
        >

          {formatTime()}

        </div>

        {/* MOTIVATION */}

        <p className="stopwatch-text">

          {running
            ? "Keep Going 🚀"
            : "Ready To Start 🔥"}

        </p>

        {/* BUTTONS */}

        <div className="stopwatch-buttons">

          <button
            className="stopwatch-btn"
            onClick={() =>
              setRunning(true)
            }
          >
            Start
          </button>

          <button
            className="stopwatch-btn"
            onClick={() =>
              setRunning(false)
            }
          >
            Stop
          </button>

          <button
            className="stopwatch-btn"
            onClick={resetTimer}
          >
            Reset
          </button>

          <button
            className="stopwatch-btn"
            onClick={addLap}
          >
            Lap
          </button>

        </div>

        {/* LAP LIST */}

        <div className="lap-section">

          {laps.length === 0 ? (

            <p className="empty-lap">
              No Laps Yet ⏱
            </p>

          ) : (

            laps.map((lap, index) => (

              <div
                key={index}
                className="lap-card"
              >

                <span>
                  Lap {index + 1}
                </span>

                <span>
                  {lap}
                </span>

              </div>

            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Stopwatch;