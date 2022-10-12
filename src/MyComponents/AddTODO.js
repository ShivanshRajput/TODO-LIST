import React, { useState } from 'react'

import './addtodo.css'
export default function AddTODO({addTodo}) {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const submit=(e)=>
  {
    e.preventDefault();
    if(!title|!desc)
    {
      alert("Title or description cannot be blank")
    }
    else
    {
    addTodo(title,desc);
    setTitle("")
    setDesc("")
    }
  }
  return (
    <div className="container">
      <form className='adtodo ' onSubmit={submit} >
        <div className="inp">
          <h3>Add a TODO</h3>
          <input type="text" className="form-control" id="todoAdd" value={title} onChange={(e)=>setTitle(e.target.value)} aria-describedby="emailHelp" />
          <h5>Add Description </h5>
          <input type="text" className="form-control" id="todoDesc" value={desc} onChange={(e)=>setDesc(e.target.value)}  aria-describedby="emailHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Add it!!</button>
      </form>
    </div>
  )
}
