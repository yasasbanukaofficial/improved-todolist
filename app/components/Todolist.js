'use client';
import React, { useState } from 'react';
import { Input, Button, Card, Alert } from 'antd';

export function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newDescription, setNewDescription] = useState("");

    function handleTaskChange(e) {
        setNewTask(e.target.value);
    }

    function handleDescriptionChange(e) {
        setNewDescription(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '' && newDescription.trim() !== '') {
            const newTaskItem = { task: newTask, description: newDescription };
            setTasks(prevTasks => [...prevTasks, newTaskItem]);
            setNewTask("");
            setNewDescription("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <>
            <h1>Todolist</h1>
            <div className='inputTask-container'>
                <Input
                    value={newTask}
                    onChange={handleTaskChange}
                    className='inputTask'
                    placeholder="Enter Your Task"
                />
                <div className='inputTask-container2'>
                    <Input
                        value={newDescription}
                        onChange={handleDescriptionChange}
                        className='inputDescription'
                        placeholder="Enter Your Description"
                    />
                    <Button onClick={addTask} type='primary' danger>
                        Add Task
                    </Button>
                </div>
            </div>
            {tasks.map((item, index) => (
                <div key={index} className='taskDisplay-container'>
                    <Card
                        className='taskCard'
                        type="inner"
                        title={item.task}
                        extra={
                            <Button onClick={() => deleteTask(index)} danger>
                                Delete
                            </Button>
                        }
                    >
                        {item.description}
                    </Card>
                </div>
            ))}
        </>
    );
}
