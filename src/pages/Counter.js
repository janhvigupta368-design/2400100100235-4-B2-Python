import React, { useState } from "react";

import "../styles.css";

function Counter() {

  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState(false);

  // INCREMENT

  const increase = () => {

    setCount(count + 1);
  };

  // DECREMENT

  const decrease = () => {

    if(count > 0){

      setCount(count - 1);
    }
  };

  // RESET

  const reset = () => {

    setCount(0);
  };

  return (

    <div className={darkMode ? "counter-page dark" : "counter-page"}>

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

      {/* COUNTER CARD */}

      <div className="counter-card">

        {/* ICON */}

        <div className="counter-logo">
          🔢
        </div>

        <h1>Counter App</h1>

        <p className="counter-subtitle">
          Modern React Counter with Premium UI
        </p>

        {/* COUNTER VALUE */}

        <div
          className={
            count > 10
            ? "counter-value active"
            : "counter-value"
          }
        >

          {count}

        </div>

        {/* MOTIVATION */}

        <p className="motivation">

          {count === 0 &&
            "Start Counting 🚀"}

          {count > 0 && count <= 5 &&
            "Great Going 🔥"}

          {count > 5 && count <= 10 &&
            "Awesome Progress 💪"}

          {count > 10 &&
            "Counter Master 👑"}

        </p>

        {/* BUTTONS */}

        <div className="counter-buttons">

          <button
            className="counter-btn"
            onClick={decrease}
          >
            -
          </button>

          <button
            className="counter-btn"
            onClick={reset}
          >
            Reset
          </button>

          <button
            className="counter-btn"
            onClick={increase}
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default Counter;