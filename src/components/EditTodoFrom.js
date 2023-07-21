import React, { useState } from 'react'
import "./Todo.css";

const EditTodoForm = ({editTodo,task}) => {

    const [value,setValue] = useState(task.task);

    const handleChange = (e)=>{
        setValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(value===""){
            alert("Enter updated Task");
        }else{
            editTodo(value,task.id);
        
            setValue("");
        }
        
    }

return (
    <>
        <form className='todo-form' onSubmit={handleSubmit}>
        <div>
            <input value={value} type='text' placeholder='Update task here' onChange ={handleChange}></input>
        </div>
        <div>
            <button type='submit'>Update</button>
        </div>
        </form>
    </>
  )
}

export default EditTodoForm;
