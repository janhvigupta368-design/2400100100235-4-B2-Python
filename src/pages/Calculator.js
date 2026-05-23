import React, { useState } from "react";

import "../styles.css";

function Calculator() {

  const [darkMode, setDarkMode] = useState(false);

  const [input, setInput] = useState("");

  // HANDLE BUTTON CLICK

  const handleClick = (value) => {

    setInput(input + value);
  };

  // CLEAR

  const clearInput = () => {

    setInput("");
  };

  // DELETE

  const deleteLast = () => {

    setInput(input.slice(0, -1));
  };

  // CALCULATE

  const calculateResult = () => {

    try{

      setInput(eval(input).toString());

    } catch {

      setInput("Error");
    }
  };

  return (

    <div className={darkMode ? "calculator-page dark" : "calculator-page"}>

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

      {/* CALCULATOR */}

      <div className="calculator-card">

        {/* LOGO */}

        <div className="calculator-logo">
          🧮
        </div>

        <h1>Modern Calculator</h1>

        {/* DISPLAY */}

        <div className="calculator-display">

          {input || "0"}

        </div>

        {/* BUTTONS */}

        <div className="calculator-buttons">

          <button
            className="calc-btn special"
            onClick={clearInput}
          >
            C
          </button>

          <button
            className="calc-btn special"
            onClick={deleteLast}
          >
            ⌫
          </button>

          <button
            className="calc-btn operator"
            onClick={() => handleClick("%")}
          >
            %
          </button>

          <button
            className="calc-btn operator"
            onClick={() => handleClick("/")}
          >
            ÷
          </button>

          {/* ROW */}

          <button
            className="calc-btn"
            onClick={() => handleClick("7")}
          >
            7
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick("8")}
          >
            8
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick("9")}
          >
            9
          </button>

          <button
            className="calc-btn operator"
            onClick={() => handleClick("*")}
          >
            ×
          </button>

          {/* ROW */}

          <button
            className="calc-btn"
            onClick={() => handleClick("4")}
          >
            4
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick("5")}
          >
            5
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick("6")}
          >
            6
          </button>

          <button
            className="calc-btn operator"
            onClick={() => handleClick("-")}
          >
            −
          </button>

          {/* ROW */}

          <button
            className="calc-btn"
            onClick={() => handleClick("1")}
          >
            1
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick("2")}
          >
            2
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick("3")}
          >
            3
          </button>

          <button
            className="calc-btn operator"
            onClick={() => handleClick("+")}
          >
            +
          </button>

          {/* LAST ROW */}

          <button
            className="calc-btn zero"
            onClick={() => handleClick("0")}
          >
            0
          </button>

          <button
            className="calc-btn"
            onClick={() => handleClick(".")}
          >
            .
          </button>

          <button
            className="calc-btn equal"
            onClick={calculateResult}
          >
            =
          </button>

        </div>

      </div>

    </div>
  );
}

export default Calculator;