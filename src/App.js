import React, { useState, useEffect } from 'react'

import './App.css'
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodo, setFilteredTodo] = useState([])

  // Runs only once when the react application re-rendered
  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    filteredTodoHandler()
    saveLocalTodos()
  }, [todos, status])

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
      const localTodos = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)))
      setTodos(localTodos)
    }
  }
  const filteredTodoHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((todo) => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodo(todos.filter((todo) => todo.completed === false))
        break
      default: setFilteredTodo(todos)
        break
    }
  }
  return (
    <div>
      <header>
        <h1>Mustaq's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodo={filteredTodo} />
    </div>
  );
}

export default App;


