import { useState } from "react";

export default function Factorial() {
  const [num, setNum] = useState(0);

  const fact = n => (n <= 1 ? 1 : n * fact(n - 1));

  return (
    <div className="container">
      <input type="number" onChange={e => setNum(+e.target.value)} />
      <h2>{fact(num)}</h2>
    </div>
  );
}