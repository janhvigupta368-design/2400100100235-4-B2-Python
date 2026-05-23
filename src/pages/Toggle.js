import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div className="container">
      <h2>{on ? "ON" : "OFF"}</h2>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </div>
  );
}