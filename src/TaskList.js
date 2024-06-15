import React, { useState } from 'react';

function TaskList({ tasks, deleteTask, toggleTaskCompletion, editTask }) {
    const [isEditing, setIsEditing] = useState(null);
    const [newTaskName, setNewTaskName] = useState('');
    const [newDueDate, setNewDueDate] = useState('');

    const handleEdit = (index) => {
        setIsEditing(index);
        setNewTaskName(tasks[index].name);
        setNewDueDate(tasks[index].dueDate);
    };

    const handleEditSubmit = (index) => {
        editTask(index, newTaskName, newDueDate);
        setIsEditing(null);
    };

    const getDueDateClass = (dueDate) => {
        const today = new Date();
        const taskDueDate = new Date(dueDate);
        return taskDueDate < today ? 'overdue' : 'upcoming';
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : getDueDateClass(task.dueDate)}>
                    {isEditing === index ? (
                        <>
                            <input
                                type="text"
                                value={newTaskName}
                                onChange={(e) => setNewTaskName(e.target.value)}
                            />
                            <input
                                type="date"
                                value={newDueDate}
                                onChange={(e) => setNewDueDate(e.target.value)}
                            />
                            <button onClick={() => handleEditSubmit(index)}>保存</button>
                            <button onClick={() => setIsEditing(null)}>キャンセル</button>
                        </>
                    ) : (
                        <>
                            <span onClick={() => toggleTaskCompletion(index)}>
                                {task.name} - {task.dueDate}
                            </span>
                            <button onClick={() => handleEdit(index)}>編集</button>
                            <button onClick={() => deleteTask(index)}>削除</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;