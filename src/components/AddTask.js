import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        //e.preventDefault는 submit a 태그 같은 제출 혹은 이동과 동시에 다시 리셋이 되는것을 막아준다
        e.preventDefault()

        if (!text) {
            alert('Please add a text')
            return
        }

        onAdd({ text, day, reminder })
        setText('') // 아래 form에서 setText 해준것을 onAdd의 props로 보낸 후 다시 객체를 비워주는 과정
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}  >
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => (e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
