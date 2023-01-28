import React, {useState} from 'react'

const ToDoForm = (props) => { 
    const {getNewlyCreatedToDoFromChild} = props;
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newlyCreatedTodo = {
            id: Math.floor(Math.random()*1000),
            text: inputValue,
        };
        getNewlyCreatedToDoFromChild(newlyCreatedTodo);
    };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" name='input'onChange={handleInputChange} value={inputValue} placeholder="Enter todo here" className='todo-input'/>
        <button type='submit' className='todo-button' >Add todo</button>
      </form>
    </div>
  )
}

export default ToDoForm
