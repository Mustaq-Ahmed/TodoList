import React from 'react'
import Todo from './Todo'
export default function TodoList({todos, setTodos, filteredTodo}) {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodo.map((todo) => (
                    <Todo key={todo.id} todo={todo} todos={todos} input={todo.input} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    )
}

