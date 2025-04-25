import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null); 
  const [editedText, setEditedText] = useState('');

  function addTask() {
    const newTask = prompt("Enter your task");
    if (newTask && newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  }

  function removeTask(indexToRemove) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  }

  function toggleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function startEdit(index, currentText) {
    setIsEditing(index);
    setEditedText(currentText);
  }

  function saveEdit(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editedText;
    setTasks(updatedTasks);
    setIsEditing(null);
    setEditedText('');
  }

  return (
    <>
      <h1>To Do List</h1>
      <button onClick={addTask}>Add Task</button>
      <div id="taskList">
        <h2>Tasks:</h2>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                />
                {isEditing === index ? (
                  <>
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(index)}>Save</button>
                  </>
                ) : (
                  <>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.text}
                    </span>
                    <button onClick={() => startEdit(index, task.text)}>Edit</button>
                  </>
                )}
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
