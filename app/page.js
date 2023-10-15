'use client'
import React, { useState } from "react";
import AddTodo from "@/componenents/Todo/AddTodo"

const page = () => {
  const [user, setUser] = useState("")
  const getUsername = () => {
    setUser(localStorage.getItem("user"))
    if (user) {

    }
  }

  return (
    <>
      <div className="flt-r my-3">
        {user ? <p className="me-2">Hello, {user}</p> : null}
      </div>
      <p className="logo">Listly</p>
      <AddTodo />
    </>
  )
}

export default page