'use client'
import React from "react";

const ShowTodos = (props) => {
    const { todos, removeTodo } = props
    return (
        <>
            <div className="container my-4">
                <div className="row" >
                    {
                        todos.length > 0 ? todos.map((elem, index) => {
                            return <div className="card col-3 mx-2 my-2" key={index} style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <div className="card-title">
                                        <div className="flt-r">
                                            <button className="badge bg-danger" onClick={() => removeTodo(index)}>Delete</button>
                                        </div>
                                        <h4>{elem.title}</h4>
                                    </div>
                                    <p>{elem.description}</p>
                                </div>
                            </div>
                        }) : <h4 className="text-center">No Task Available</h4>
                    }
                </div>
            </div>
        </>
    )
}

export default ShowTodos