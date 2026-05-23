import React, { useState, useEffect } from "react";

import "../styles.css";

function Todo() {

  const [darkMode, setDarkMode] = useState(false);

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const [time, setTime] = useState("");

  // LIVE TIME

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date();

      setTime(
        now.toLocaleTimeString()
      );

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  // ADD TASK

  const addTask = () => {

    if(task.trim() === "") return;

    const now = new Date();

    const newTask = {

      id: Date.now(),

      text: task,

      completed: false,

      date:
        now.toLocaleDateString(),

      time:
        now.toLocaleTimeString()
    };

    setTasks([...tasks, newTask]);

    setTask("");
  };

  // DELETE TASK

  const deleteTask = (id) => {

    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  // TOGGLE CHECKBOX

  const toggleTask = (id) => {

    setTasks(

      tasks.map((task) =>

        task.id === id
        ? {
            ...task,
            completed:
            !task.completed
          }
        : task
      )
    );
  };

  // COUNTS

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length;

  return (

    <div className={darkMode ? "todo-page dark" : "todo-page"}>

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

      {/* TODO CARD */}

      <div className="todo-card">

        {/* LOGO */}

        <div className="todo-logo">
          ✅
        </div>

        <h1>Todo List</h1>

        {/* DATE & TIME */}

        <div className="datetime-box">

          <p>
            📅 {new Date().toLocaleDateString()}
          </p>

          <p>
            ⏰ {time}
          </p>

        </div>

        {/* INPUT */}

        <div className="todo-input-box">

          <input
            type="text"
            placeholder="Add new task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            className="todo-input"
          />

          <button
            className="add-btn"
            onClick={addTask}
          >
            Add
          </button>

        </div>

        {/* COUNTER */}

        <div className="task-counter">

          <p>
            Total: {tasks.length}
          </p>

          <p>
            Completed: {completedTasks}
          </p>

        </div>

        {/* TASKS */}

        <div className="task-list">

          {tasks.length === 0 ? (

            <div className="empty-state">

              No Tasks Yet 🚀

            </div>

          ) : (

            tasks.map((item) => (

              <div
                key={item.id}
                className={
                  item.completed
                  ? "task-item completed"
                  : "task-item"
                }
              >

                {/* LEFT */}

                <div className="task-left">

                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() =>
                      toggleTask(item.id)
                    }
                  />

                  <div>

                    <h3>
                      {item.text}
                    </h3>

                    <small>
                      📅 {item.date}
                      {" | "}
                      ⏰ {item.time}
                    </small>

                  </div>

                </div>

                {/* DELETE */}

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(item.id)
                  }
                >
                  🗑
                </button>

              </div>

            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Todo;