import { useState, useEffect  } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

  let [tasks, setTasks] = useState([])

const getTasks = () =>{ 
  axios.get('http://127.0.0.1:8000/api/task')
  .then(
    (response) => setTasks(response.data), 
    (err)=>console.log(err)
  )
  .catch((error) => console.error(error))
}

const handleCreate = (addTask) => {
  axios
  .post('http://127.0.0.1:8000/api/task', addTask)
    .then((response) => {
      console.log(response)
      getTasks()
    })
  }

  const handleDelete = (event) => {
    axios.delete('http://127.0.0.1:8000/api/task/' + event.target.value)
      .then((response) => {
        getTasks()
      })
  }

  const handleUpdate = (editTask) => {
    console.log(editTask)
    axios.put('http://127.0.0.1:8000/api/task/' + editTask.id, editTask)
      .then((response) => {
        getTasks()
      })
  }
      
useEffect(() =>{
  getTasks()
}, [])

  return (
    <>
      <div className='container'>
        <h1 className='app-header'>Time Box</h1>
        <Add handleCreate={handleCreate} />
        {tasks.map((task) => {
          return (
            <div className='task' key={task.id}>
              <h3>Task: {task.name}</h3>
              <h4>Notes: {task.notes}</h4>
              <h4>Time to Complete: {task.time} minutes</h4>
              <h4>Priority: {task.priority}</h4>
              <Edit tasks={tasks} handleUpdate={handleUpdate} />
              <button onClick={handleDelete} value={task.id}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

