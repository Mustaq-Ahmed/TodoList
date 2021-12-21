import React from "react";

export default function Todo({input, todo, todos, setTodos}) {
    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed,
                }
            }
            return item
        }))
    }
    const deleteHandler = () => {
        setTodos(todos.filter((ele) => ele.id !== todo.id))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {input}
            </li>
            <div>
            <button onClick={completedHandler} className="complete-btn"><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className='fas fa-trash'></i></button>
            </div>
        </div>
    )
}

