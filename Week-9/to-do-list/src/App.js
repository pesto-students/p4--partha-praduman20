import React, { useEffect, useState } from "react";
import "./App.css";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button onClick={() => completeTask(index)}>Complete</button>
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        x
      </button>
    </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const form = document.querySelector(".addSec");

  const handlesubmit = (event) => {
    event.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
    form.reset();
  };

  return (
    <form className="addSec" onSubmit={handlesubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add new task..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input className="button" type="submit" value="Add" />
    </form>
  );
}

function App() {
  const [task, setTask] = useState([
    {
      title: "Learn React",
      completed: false,
    },
  ]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(task.filter((task) => !task.completed).length);
  }, [task]);

  const addTask = (title) => {
    const newTasks = [...task, { title, completed: false }];
    setTask(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...task];
    newTasks[index].completed = true;
    setTask(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  return (
    <>
      <div className="body">
        <div className="app">
          <h1 className="header">to-do-list</h1>

          <div className="create-task">
            <CreateTask addTask={addTask} />
          </div>

          <div>
            <h2 className="header2">Task-to-do ({count})</h2>
          </div>

          <div>
            {task.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={index}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
