import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {
                // map()에 대한 활용
                tasks.map((task, index) => (
                    <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))
            }
        </>
    )
}

export default Tasks
