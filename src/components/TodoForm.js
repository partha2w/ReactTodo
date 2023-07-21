import React, { useState } from 'react'
import "./Todo.css";

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value===""){
            alert("Please Enter Task")
        }else{

            addTodo(value);
    
            setValue("");
        }
        
    }

    return (
        <>
            <form className='todo-form' onSubmit={handleSubmit}>
                <div>
                    <input value={value} type='text' placeholder='Add task here' onChange={handleChange}></input>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </>
    )
}

export default TodoForm
