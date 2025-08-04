import React from "react";
import axios from "axios";

function TaskList({ tasks, onTaskChange }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    onTaskChange();
  };

  return (
    <div>
      <h3>Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong>: {task.description}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
