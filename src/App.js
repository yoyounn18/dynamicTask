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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

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
