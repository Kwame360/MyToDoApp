import React from 'react'

const ToDoForm = (props) => {
  
  

  const handleInputChange = (event) => {
    const { value } = event.target
    props.setInputValue(value)
  }
console.log(props.inputValue);

  return (
    <div>
      <form onSubmit={props.handleSubmit} className="todo-form">
        <input
          type="text"
          name="input"
          onChange={handleInputChange}
          value={props.inputValue}
          placeholder="Enter todo here"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add todo
        </button>
      </form>
    </div>
  )
}

export default ToDoForm
