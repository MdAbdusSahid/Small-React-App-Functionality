import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([task, ...tasks]);
      setTask("");
    }
  };

  const handleRemove = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Inline styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto",
      borderRadius: "8px",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    input: {
      padding: "8px",
      width: "70%",
      marginRight: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      marginTop: "20px",
    },
    listItem: {
      backgroundColor: "white",
      padding: "10px",
      marginBottom: "8px",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    removeButton: {
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "6px 10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ToDo List</h2>
      <input
        style={styles.input}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button style={styles.button} onClick={handleAddTask}>
        Add Task
      </button>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {task}
            <button
              style={styles.removeButton}
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
