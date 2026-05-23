import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles.css";

function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}

      <nav className="navbar">

        <h2 className="logo"></h2>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </nav>

      {/* HERO SECTION */}

      <div className="hero">

        <img
          src="/photo.jpg"
          alt="profile"
          className="profile-img"
        />

        <h1>Janhvi Gupta</h1>

        <h3>BTech 2nd Year Student | Software Engineer</h3>

        <p>
          Passionate about Full Stack Development,
          Java, DSA, Python and React JS.
        </p>

        {/* BUTTONS */}

        <div className="buttons">

          <a
            href="https://github.com/janhvigupta368-design/2400100100235-4-B2-Python.git"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/janhvi-gupta-8831b631b"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            LinkedIn
          </a>

        </div>

      </div>

      {/* SKILLS */}

      <section className="section">

        <h2>My Skills</h2>

        <div className="skills-grid">

          <div className="card">React JS</div>

          <div className="card">Java</div>

          <div className="card">DSA</div>

          <div className="card">Python</div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="section">

        <h2>My Projects</h2>

        <div className="project-grid">

          <Link to="/login" className="project-card">
            Login System
          </Link>

          <Link to="/register" className="project-card">
            Register Page
          </Link>

          <Link to="/counter" className="project-card">
            Counter App
          </Link>

          <Link to="/stopwatch" className="project-card">
            Stopwatch
          </Link>

          <Link to="/calculator" className="project-card">
            Calculator
          </Link>

          <Link to="/todo" className="project-card">
            Todo App
          </Link>

          <Link to="/weather" className="project-card">
            Weather App
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;