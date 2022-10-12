import React from 'react'
import TodoItem from './TodoItem'
export default function Todos (props) {
  let styleCont={
    minHeight:"100vh"
  }
  return (
    // <div>todos works</div>
    <div className="container my-3" style={styleCont}>
      <h3>TODOS List</h3>
      {props.todos.length===0?"NO todos to display ":
      props.todos.map((todo)=>
        {
          return (
            <>
          <TodoItem todos={todo} key={todo.sl} onDelete={props.onDelete}/>
          <hr />
          </>
          );
          // {/*Aquired two parameteres as props from the parent class
          //   Always use the same name as it is a pre-defined function  */}
          
        })
      }
      
      {/*map function returns the same number of map just store each value in a
      variavle and then return the same variable thats all 
      can beb used to return a particular value through a given list of datas*/}
      
      
    </div>
  )
}
