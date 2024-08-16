'use client'
import React from 'react';
import { Input, Button, Card, Alert } from 'antd';

const TaskInput = ({ onChange }) => {

    function handleTaskChange(e) {
        onChange(e.target.value)
    }

    return (
        <div>
            <Input
                type='text'
                onChange={handleTaskChange}
                className='inputTask'
                placeholder="Enter Your Task"
            />
        </div>
    )
}

export default TaskInput
