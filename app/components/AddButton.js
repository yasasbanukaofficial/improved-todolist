'use client'
import React from 'react';
import { Input, Button, Card, Alert } from 'antd';

const AddButton = ({ onClick }) => {
    return (
        <div>
            <Button
                onClick={onClick}
                type='primary' danger>
                Add Task
            </Button>
        </div>
    )
}

export default AddButton
