import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/counter")}>Counter</button>

      <button onClick={() => document.body.classList.toggle("dark")}>
        Mode
      </button>

      <button onClick={() => navigate("/toggle")}>Toggle</button>
      <button onClick={() => navigate("/calculator")}>Calculator</button>
      <button onClick={() => navigate("/stopwatch")}>Stopwatch</button>
    </div>
  );
}

export default Dashboard;