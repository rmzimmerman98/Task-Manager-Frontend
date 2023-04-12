import { useState, useEffect  } from 'react'

const Add = (props) =>{

    let [task, setTask] = useState({...props.task})

    const handleChange = (event) =>{
        setTask({...task, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props/handleCreate(task)

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tasks">Tasks: </label>
                <input type="text" name='task' onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="notes">Notes: </label>
                <input type="text" name='notes' onChange={handleChange} />
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

        </>

    )
}


export default Add