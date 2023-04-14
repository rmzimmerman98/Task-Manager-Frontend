import React, { useState } from 'react'

const Edit = (props) => {
  let emptyTask = { name: '', notes: '', time_to_complete: '', priority: ''}
  const [task, setTask] = useState(emptyTask)

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
        <summary>Edit Task</summary>
        <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Task: </label>
                        <input className="form-control" type="text" name="name" value={task.name} onChange={handleChange}/>
                    </div>
                        <br/>
                        <br/>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="notes"> </label>
                        <textarea className="form-control" type="text" rows="3" name="notes" value={task.notes} onChange={handleChange}/>
                    </div>
                        <br/>
                        <br/>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="time_to_complete">Estimated Time To Complete: </label>
                        <input className="form-control" name="time_to_complete" type="number" id="timeInput" step="5" min="0" value={task.time_to_complete} onChange={handleChange}/>
                    </div>
                        <br/>
                        <br/>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="priority_urgent" name="priority" value="UR" checked={task.priority === 'UR'} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="priority_urgent">Urgent</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="priority_do" name="priority" value="DO" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="priority_do">Do</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="priority_defer" name="priority" value="DF" checked={task.priority === 'DF'} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="priority_defer">Defer</label>   
                        </div>
                    </div>
                    <input
                    className="btn btn-secondary btn-lg"
                    type="submit"
                    value="Submit"/>
                </form>
      </details>
    </>
  )
}

export default Edit
