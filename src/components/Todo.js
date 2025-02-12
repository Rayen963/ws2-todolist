import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

 const Todo = ({task, toggleComplete, deletTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}> {task.task}</p>
      <div>
        <FontAwesomeIcon icon={faCircleCheck} onClick={() =>toggleComplete(task.id) }/>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => 
          editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() =>
          deletTodo(task.id)}/>

      </div>
      
    </div>
  )
}
export default Todo;

