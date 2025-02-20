import React, { useState, useEffect } from "react";
import "./Todolist.css"; // นำเข้าไฟล์ CSS

function Todolist({ setPage }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });
  const [input, setInput] = useState("");

  // อัปเดต LocalStorage เมื่อ tasks มีการเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, status: "progress" }]);
    setInput("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: task.status === "progress" ? "done" : "progress" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>📌 To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="เพิ่มงานใหม่..."
        />
        <button onClick={addTask}>เพิ่ม</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.status}>
            <span onClick={() => toggleStatus(index)}>
              {task.status === "done" ? "✅" : "⏳"} {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
      <button className="btn_back" onClick={() => setPage("app")}>
        ⬅ Back to App
      </button>
    </div>
  );
}

export default Todolist;
