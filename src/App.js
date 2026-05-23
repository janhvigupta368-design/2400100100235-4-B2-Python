import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import Calculator from "./pages/Calculator";
import Todo from "./pages/Todo";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/counter" element={<Counter />} />

        <Route path="/stopwatch" element={<Stopwatch />} />

        <Route path="/calculator" element={<Calculator />} />

        <Route path="/todo" element={<Todo />} />

        <Route path="/weather" element={<Weather />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;