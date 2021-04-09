import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${!task.reminder ? 'reminder' : ''}`}
            // props를 보내줄때는 단순히 중괄호로 래핑하는게 아니라 함수의 형태를 갖춘 후 props를 보내야한다.
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>{task.text} <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
