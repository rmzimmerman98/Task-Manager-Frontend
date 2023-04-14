import { useState, useEffect  } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css'
// import ReactModal from 'react-modal'

const App = () => {

  let [tasks, setTasks] = useState([])
  // const [showAddModal, setShowAddModal] = useState(false)
  

const getTasks = () => { 
  axios.get('http://127.0.0.1:8000/api/tasks')
  .then(
    (response) => setTasks(response.data), 
    (err)=>console.log(err)
  )
  .catch((error) => console.error(error))
}

const handleCreate = (addTask) => {
  axios.post('http://127.0.0.1:8000/api/tasks', addTask)
    .then((response) => {
      console.log(response)
      getTasks()
    })
  }

  const handleDelete = (event) => {
    axios.delete('http://127.0.0.1:8000/api/tasks/' + event.target.value)
      .then((response) => {
        getTasks()
      })
  }

  const handleUpdate = (editTask) => {
    console.log(editTask)
    axios.put('http://127.0.0.1:8000/api/tasks/' + editTask.id, editTask)
      .then((response) => {
        getTasks()
      })
  }

const priorityColor = (priority) => {
  switch (priority) {
    case 'UR':
      return 'border-danger'
    case 'DO':
      return 'border-success'
    case 'DF':
      return 'border-warning' 
    default:
      return 'border-success'
  }
}
      
useEffect(() => {
  getTasks()
}, [])

  return (
    <>
      <div className='container p-3'>
        <h1 className='text-center mt-3'>Time Box</h1>
        <Add handleCreate={handleCreate} />
        {/* <button className="btn btn-secondary btn-lg" onClick={() => setShowAddModal(true)}>Add</button> */}
        {tasks.map((task) => {
          return (
            <div className={`card bg-light mb-3 ${priorityColor(task.priority)}`} key={task.id}>
              <Edit handleUpdate={handleUpdate} task={task}/>
                <h4 className='card-header'>{task.name}</h4>
                <div className='card-body'>
                  <h5 className=''>{task.time_to_complete} minutes to complete</h5>
                  <h5 className=''>Notes: {task.notes}</h5>
                  <h5 className=''>Priority: { task.priority }</h5>
                  <div className='footer'>
                  <button className="btn btn-danger" onClick={handleDelete} value={task.id}>Delete</button>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

