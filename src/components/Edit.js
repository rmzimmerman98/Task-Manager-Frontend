import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

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
      <div className='p-3'>
      <button className='btn btn-secondary' onClick={handleShow}>Edit</button>
      </div>
      <Modal className='modal' show={show} onHide={handleClose}> 
        <div className='modal-header' closeButton>
          <h3 className='align-center text modal-title'>Edit Task</h3>
        </div>
        <div className='modal-body'>
          <form className='mb-3' onSubmit={handleSubmit}>
            <div className="col-md-12 mb-3">
              <label className="form-label" htmlFor="name">Task</label>
              <input className="form-control" type="text" name="name" required value={task.name} onChange={handleChange}/>
            </div>
            <div className='row'>
            <div className="col-md-2 mb-3">
              <label className="form-label" htmlFor="time_to_complete">Estimated Time To Complete</label>
              <input className="form-control" name="time_to_complete" required type="number" id="timeInput" step="5" min="0" value={task.time_to_complete} onChange={handleChange}/>
            </div>
            <fieldset className="mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
                <div class="col-sm-10">
                  <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" id="priority_urgent" 
                    name="priority" 
                    value="URGENT"
                    onChange={handleChange} 
                    checked={task.priority === "URGENT"}  />
                    <label className="form-check-label" htmlFor="priority_urgent" >Urgent</label>
                  </div>
                  <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" id="priority_do" 
                    name="priority" 
                    value="DO"
                    onChange={handleChange} 
                    checked={task.priority === "DO"}  />
                    <label className="form-check-label" htmlFor="priority_do">Do</label>
                  </div>
                  <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" id="priority_defer" 
                    name="priority" 
                    value="DEFER" 
                    onChange={handleChange} 
                    checked={task.priority === "DEFER"}  />
                    <label className="form-check-label" htmlFor="priority_defer" >Defer</label>   
                  </div>
                </div>
              </fieldset>
              </div>
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="notes">Notes</label>
              <textarea className="form-control" type="text" rows="3" name="notes" value={task.notes} onChange={handleChange}/>
            </div> 
            <div className='modal-footer'>
                <button className='btn btn-secondary' onClick={handleClose}>Close</button>
                <input
                className="btn btn-primary"
                type="submit"
                value="Update"
                onClick={handleClose}/>
            </div>
          </form>    
        </div>
      </Modal>
    </>
  )
}

export default Edit
