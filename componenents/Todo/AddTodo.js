"use client"
import React, { useEffect, useState } from "react";
import ShowTodos from "@/componenents/Todo/ShowTodos"
const AddTodo = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [todos, setTodos] = useState([])

  
  const removeTodos = () => {
    localStorage.clear("todo-v1")
    setTodos([])
  }
  
  const removeTodo = (index) => {
    debugger;
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todo-v1', JSON.stringify(updatedTodos));
  }

  const getTodos = () => {
    const getTodos = JSON.parse(localStorage.getItem("todo-v1"))
    setTodos(getTodos)
  }

  const addTodo = () => {
    const data = {
      title: title,
      description: description
    }

    const updatedTodos = [...todos, data];
    setTodos(updatedTodos);
    localStorage.setItem('todo-v1', JSON.stringify(updatedTodos));
    setTitle("")
    setDescription("")
  }

  useEffect(() => {
    getTodos()
  }, [])
  return (
    <>
      <form className="container mx-auto col-sm-4 col-md-6" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-sm-5 col-md-5">
            <input className="form-control" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-sm-5 col-md-5">
            <input className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="col-sm-1 col-md-1">
            <button className="btn btn-outline-primary" onClick={() => addTodo()}>Add</button>
          </div>
          <div className="col-sm-1 col-md-1">
            <button className="btn btn-outline-danger" onClick={() => removeTodos()}>Remove</button>
          </div>
        </div>
      </form>

      <ShowTodos todos={todos} removeTodo={removeTodo} />
    </>
  )
}

export default AddTodo