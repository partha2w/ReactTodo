import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import "./Todo.css";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleClick = () => {
    toggleComplete(task.id);
  };

  return (
    <div className='todo'>
      <p onClick={handleClick} className={`${task.completed ? 'completed' : ''}`}>
        {task.task}
      </p>
      <div className='options'>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};
export default Todo
