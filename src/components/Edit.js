import React, { useState } from 'react'

const Edit = (props) => {
  
  const [task, setTask] = useState({ ...props.task })

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
        <form className='3' onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="name">Task: </label>
                        <input className="form-control" type="text" name="name" value={task.name} onChange={handleChange}/>
                    </div>
                        <br/>
                        <br/>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="notes"> </label>
                        <textarea className="form-control" type="text" rows="3" name="notes" value={task.notes} onChange={handleChange}/>
                    </div>
                        <br/>
                        <br/>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="time_to_complete">Estimated Time To Complete: </label>
                        <input className="form-control" name="time_to_complete" type="number" id="timeInput" step="5" min="0" value={task.time_to_complete} onChange={handleChange}/>
                    </div>
                        <br/>
                        <br/>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="priority_urgent" name="priority" value="UR" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="priority_urgent">Urgent</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="priority_do" name="priority" value="DO" checked onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="priority_do">Do</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="priority_defer" name="priority" value="DF" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="priority_defer">Defer</label>   
                        </div>
                    </div>
                    <input
                    className="btn btn-secondary btn-lg"
                    type="submit"
                    value="Update"/>
                </form>
      </details>
    </>
  )
}

export default Edit
