import React, { useState } from 'react'

const Edit = (props) => {
  
  const [task, setTask] = useState({ ...props.task })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(task)
  }


  return (
    <>
      <div className='modal' show={show} onHide={handleClose}>
      <button className='btn btn-secondary' onClick={handleShow}>Edit</button>
      </div>
        
          <div className='modal-header' closeButton>
            <div className='modal-title'>Edit Task</div>
          </div>

        <div className='modal-body'>
          <form className='mb-3 align-center text' onSubmit={handleSubmit}>
            <div className="col-md-8">
              <label className="form-label" htmlFor="name">Task</label>
              <input className="form-control" type="text" name="name" required value={task.name} onChange={handleChange}/>
            </div>
            <div className="col-md-2">
              <label className="form-label" htmlFor="time_to_complete">Estimated Time To Complete</label>
              <input className="form-control" name="time_to_complete" required type="number" id="timeInput" step="5" min="0" value={task.time_to_complete} onChange={handleChange}/>
            </div>
            <div className="col-10  mb-3">
              <label className="form-label" htmlFor="notes">Notes</label>
              <textarea className="form-control" type="text" rows="3" name="notes" value={task.notes} onChange={handleChange}/>
            </div>
              <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
                <div class="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="priority_urgent" name="priority" value="UR" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="priority_urgent">Urgent</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="priority_do" name="priority" value="DO" checked onChange={handleChange} />
                    <label className="form-check-label" htmlFor="priority_do">Do</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="priority_defer" name="priority" value="DF" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="priority_defer">Defer</label>   
                  </div>
                </div>
              </fieldset>
              <div className='mb-3 modal-footer'>
                <button className='btn btn-secondary' onClick={handleClose}>Close</button>
                <input
                className="btn btn-primary"
                type="submit"
                value="Update"/>
              </div>
          </form>    
        </div>
     
    </>
  )
}

export default Edit
