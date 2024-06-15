import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName && dueDate) {
            addTask(taskName, dueDate);
            setTaskName('');
            setDueDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="タスクを入力"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">追加</button>
        </form>
    );
}

export default TaskForm;
