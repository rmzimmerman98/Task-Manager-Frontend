import { useState } from "react";

const Edit = (props) =>{
  
  const [task, setTask] = useState({})

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(task)
  }

  return (
    <>
            <details>
                <summary>Edit Person</summary>
                <form onSubmit={handleSubmit}>
                <label htmlFor="tasks">Tasks: </label>
                <input type="text" name='tasks' onChange={handleChange} value={task.tasks} />
                <br />
                <br />
                <label htmlFor="notes">Notes: </label>
                <input type="text" name='notes' onChange={handleChange} value={task.notes} />
                <br />
                <br />
                <label htmlFor="time to complete">Time to complete: </label>
                <input type="number" name='time to complete' onChange={handleChange} />
                <br />
                <br />
                <input type="checkbox" />
                <br />
                <br />
                <input type="submit" />
                </form>

            </details>
        </>
    )
}

export default Edit