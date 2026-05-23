import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark portfolio" : "portfolio"}>

      {/* NAVBAR */}
      <nav className="nav">
        <h2>Janhvi Gupta</h2>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Hi, I'm Janhvi Gupta 👋</h1>
        <p>Software Engineer | MERN Stack Developer</p>

        <div className="buttons">
          <a href="https://github.com/janhvigupta368-design/2400100100235-4-B2-Python.git" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/janhvi-gupta-8831b631b" target="_blank">LinkedIn</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate Software Engineer skilled in Full Stack Web Development,
          Data Structures & Algorithms with Java, and Python.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Java (DSA)</span>
          <span>Python</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>🍔 Food Ordering Website</h3>
          <p>Responsive website with menu and ordering system.</p>
          <button>View Project</button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

    </div>
  );
}