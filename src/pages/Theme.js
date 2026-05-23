import { useState } from "react";

export default function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark container" : "container"}>
      <h2>Theme Switch 🌙</h2>

      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
  );
}