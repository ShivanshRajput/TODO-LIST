import React from 'react'

export default function TodoItem({todos,onDelete}) {
  return (
    <div>
      <h4>{todos.work}</h4>
      <p>{todos.desc}</p>
      
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete </button>

      {/*Since the props can be passed individually too so we have passed them seperately as the number is less in this case howsoever the name should always be same for a prop*/}
    </div>
  )
}
