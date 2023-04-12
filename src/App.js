import { useState, useEffect  } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () =>{

  let [task, setTask] = useState({})

const getTask = () =>{ 
  axios.get('http://localhost:8000/Task')
  .then((response) => setTask(response.data), 
  (err)=>console.log(err)).catch((err) => console.log(err))
}

  const handleCreate = (addTask) => {
    axios.post('http://localhost:8000/task', addTask)
      .then((response) => {
        console.log(response)
        getTask()
      })
  }

  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/task' + event.target.value)
      .then((response) => {
        getTask()
      })
  }

  const handleUpdate = (editTask) => {
    console.log(editPerson)
    axios.put('http://localhost:8000/api/contacts/' + editTask.id, editTask)
      .then((response) => {
        getTask()
      })
  }
      


useEffect(() =>{
  getTask()
}, [])
  return (
    <>

      <h1>Time Box</h1>
      <Add handleCreate={handleCreate} />
      {task.map((task) => {
        return (
          <>
            <Task task={task} />
            <Edit tasks={tasks} handleUpdate={handleUpdate} />
            <button onClick={() => { handleDelete(task) }}>Delete</button>

          </>
        )
      })}

    </>
  )

}

export default App

