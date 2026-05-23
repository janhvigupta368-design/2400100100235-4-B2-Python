import React, { useState } from "react";
import "../styles.css";

function Register() {

  const [darkMode, setDarkMode] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");

  const handleRegister = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      alert("Account Created Successfully 🚀");

    }, 2000);
  };

  return (

    <div className={darkMode ? "register-page dark" : "register-page"}>

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

      {/* REGISTER CARD */}

      <div className="register-card">

        {/* LOGO */}

        <div className="register-logo">
          👩‍💻
        </div>

        <h1>Create Account</h1>

        <p className="subtitle">
          Join and start your coding journey
        </p>

        {/* FULL NAME */}

        <input
          type="text"
          placeholder="Full Name"
          className="register-input"
        />

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email Address"
          className="register-input"
        />

        {/* PHONE */}

        <input
          type="tel"
          placeholder="Phone Number"
          className="register-input"
        />

        {/* GENDER */}

        <select className="register-input">

          <option>Select Gender</option>

          <option>Male</option>

          <option>Female</option>

          <option>Other</option>

        </select>

        {/* PASSWORD */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>

        </div>

        {/* PASSWORD STRENGTH */}

        <div className="strength-box">

          <div
            className={
              password.length < 5
                ? "strength weak"
                : password.length < 8
                ? "strength medium"
                : "strength strong"
            }
          ></div>

        </div>

        {/* CONFIRM PASSWORD */}

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="register-input"
        />

        {/* TERMS */}

        <div className="terms-box">

          <label>

            <input type="checkbox" />

            I agree to Terms & Conditions

          </label>

        </div>

        {/* BUTTON */}

        <button
          className="register-btn"
          onClick={handleRegister}
        >

          {loading ? "Creating Account..." : "Register"}

        </button>

        {/* SOCIAL */}

        <div className="social-section">

          <p>Or signup with</p>

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

export default Register;