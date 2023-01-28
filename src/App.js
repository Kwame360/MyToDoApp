import React, { useState } from 'react'
import './App.css'
import ToDoForm from './components/todoform'
import Todolist from './components/todolist'

const App = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newlyCreatedTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
    }
    
    console.log(newlyCreatedTodo)
  }

  return (
    <div>
      <ToDoForm
        className="todo-form"
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <Todolist className="todo-list"/>
    </div>
  )
}
export default App
