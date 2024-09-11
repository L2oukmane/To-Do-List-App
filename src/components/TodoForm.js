import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
    const handelSubmit = e =>{
        e.preventDefault();
        
    }


  return (
    <form className='TodoForm' onSubmit={handelSubmit}>

        <input className='todo-input' type='text' placeholder='What is the task today?' 
        onChange={(e) => setValue(e.target.value)} ></input>
        <button className='todo-btn' type='submit'>Add Task</button>
    </form>
  )
}
