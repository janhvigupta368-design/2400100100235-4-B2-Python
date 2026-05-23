import React, { useState } from "react";
import "../styles.css";

function Login() {

  const [darkMode, setDarkMode] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful 🚀");
    }, 2000);
  };

  return (

    <div className={darkMode ? "login-page dark" : "login-page"}>

      {/* THEME BUTTON */}

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* BACKGROUND BLOBS */}

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* LOGIN CARD */}

      <div className="login-card">

        {/* LOGO */}

        <div className="login-logo">
          🔐
        </div>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Login to continue your journey
        </p>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter your email"
          className="login-input"
        />

        {/* PASSWORD */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="login-input"
          />

          <span
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>

        </div>

        {/* OPTIONS */}

        <div className="login-options">

          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="/">
            Forgot Password?
          </a>

        </div>

        {/* LOGIN BUTTON */}

        <button
          className="login-btn"
          onClick={handleLogin}
        >

          {loading ? "Loading..." : "Login"}

        </button>

        {/* SOCIAL LOGIN */}

        <div className="social-section">

          <p>Or continue with</p>

          <div className="social-buttons">

            <button className="google-btn">
              Google
            </button>

            <button className="github-btn">
              GitHub
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;