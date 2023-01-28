import React from 'react'
import ToDoForm from './todoform';

const Todolist = () => {
    const handleModifyToDos = (getNewlyCreatedToDoDetails) => {
        console.log(getNewlyCreatedToDoDetails);
    }
  return (
    <div>
      <ToDoForm getNewlyCreatedToDoFromChild = {handleModifyToDos}/>
    </div>
  )
}

export default Todolist;