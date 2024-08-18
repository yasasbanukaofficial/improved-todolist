'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Input, Button, Card, Alert } from 'antd';
import TaskInput from './TaskInput';
import AddButton from './AddButton';
import DigitalClock from './DigitalClock';

export function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() !== '') {

            const newTaskObject = {
                id: uuidv4(),
                content: newTask
            }

            setTasks(t => [...t, newTaskObject]);
            setNewTask("");
        }
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter(tasks => tasks.id !== id);
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
            {tasks.map(tasks => (
                <div key={tasks.id} className='taskDisplay-container'>
                    <Card
                        className='taskCard'
                        type="inner"
                        title={tasks.content}
                        extra={
                            <Button onClick={() => deleteTask(tasks.id)} danger>
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
