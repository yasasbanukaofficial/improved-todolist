'use client';
import React, { useState } from 'react';
import { Input, Button, Card, Alert } from 'antd';
import TaskInput from './TaskInput';
import AddButton from './AddButton';
import DigitalClock from './DigitalClock';

export function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <>
            <div className='header'>
                <h1>✔️ Todolist </h1>
                <DigitalClock />
            </div>
            <div className='inputTask-container'>
                <TaskInput
                    value={newTask}
                    onChange={setNewTask}
                />
                <div className='inputTask-container2'>
                    <AddButton
                        onClick={addTask}
                    />
                </div>
            </div>
            {tasks.map((tasks, index) => (
                <div key={tasks} className='taskDisplay-container'>
                    <Card
                        className='taskCard'
                        type="inner"
                        title={tasks}
                        extra={
                            <Button onClick={() => deleteTask(index)} danger>
                                Delete
                            </Button>
                        }
                    >
                    </Card>
                </div>
            ))}
        </>
    );
}
