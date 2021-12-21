import React from 'react'
// import '../App.css'
export default function Form({inputText, setInputText, todos, setTodos, setStatus}) {
    const inputHandler = (e) => {
        setInputText(e.target.value)
        // console.log(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(inputText === ""){
            alert("Please Enter Something")
        }
        else{
            setTodos([
                ...todos,
                {input: inputText, completed: false, id: Math.random().toString()}
            ])
            setInputText("")
        }
    }

    const filteredTodoHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input value={inputText} onChange={inputHandler} className='todo-input' type="text"/>
                <button className='form-btn'><i className='fas fa-plus-square'></i></button>
                <div className="select">
                    <select onChange={filteredTodoHandler} name="todos" className='filter-todo'>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
