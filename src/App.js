import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Reminder 1',
      day: 'Day 1',
      reminder: true
    },
    {
      id: 2,
      text: 'Reminder 2',
      day: 'Day 2',
      reminder: true
    },
    {
      id: 3,
      text: 'Reminder 3',
      day: 'Day 3',
      reminder: false
    }
  ])

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: 'New Task',
      day: 'Today',
      reminder: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={addTask} />
      <Tasks tasks={tasks} />
    </div>
  )
}




export default App