import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Good Morning',
        day: 'Monday',
        reminder: true,
      },
      {
        id: 2,
        text: 'Good Afternoon',
        day: 'Tuesday',
        reminder: true,
      },
      {
        id: 3,
        text: 'Good Night',
        day: 'Wendsday',
        reminder: false,
      }
    ]
  )

  // filter를 이용하여 받아온 id props와 다른 것들로 새로운 task 배열을 return하여 제거의 효과를 만듦.
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // map을 이용하여 받아온 id props의 객체의 reminder(boolean) 값을 바꿔줌
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // 새로 추가한 객체를 props로 받아와 random을 이용하여 임의의 id를 부여한 후 기존 tasks(...tasks)에 추가함
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

  //Add Task Component를 toggle 형식으로 펼쳤다 접었다를 할 수 있는 function
  const showAddTaskBtn = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div>
      <Header onClick={showAddTaskBtn} btnText={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  )
}

export default App
