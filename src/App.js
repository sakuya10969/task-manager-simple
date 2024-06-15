import React, { useState } from 'react';
import './App.css'; // CSSのインポート
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, dueDate) => {
    const newTask = { name: taskName, dueDate: dueDate, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (index, newTaskName, newDueDate) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: newTaskName, dueDate: newDueDate } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>タスク管理アプリ</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
