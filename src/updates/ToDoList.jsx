import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState(["Wake Up", "Take Bath", "Go To School"]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInput}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={() => deleteTask(index)}>X</button>
            <button onClick={() => moveUp(index)}>Up</button>
            <button onClick={() => moveDown(index)}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
