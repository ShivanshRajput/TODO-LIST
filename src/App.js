import './App.css';
import Header from './MyComponents/header';
import About from './MyComponents/About';
import AddTODO from './MyComponents/AddTODO';
import Todos from './MyComponents/Todos';
import { Footer } from './MyComponents/footer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("On delete clicked for !!", todo)
    // const index=todos.indexOf(todo)
    // console.log(index)
    // todos.splice(index,1)
    // it only alters the array and not the basic dom and so no changes are observerd 
    //We use hooks for all this changes which we will be studying soon.

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    //filter method takes each element of todos as e and then return the element which does not match the todo mentioned in the setTodos fucntions
    //Now the function is such that it updates the todo list throughout the dom .
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno = 0;
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sl + 1
    console.log("Sno-", sno)
    console.log("I am adding a todo", title, desc)
    const myTodo = {
      sl: sno,
      work: title,
      desc: desc
    }
    console.log(myTodo)
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    //   <>
    //  <h1>Hello everyone .</h1>
    //  <h2>Wrap me in something otherwise i won't work as anything that is retuned needs to be wrapped</h2></>
    <>
      <BrowserRouter>

        <Header title="My Todos List" search={false} />
        <Routes>
          <Route path="/" element={
            <>
            <AddTODO addTodo={addTodo} />
            {/* //now here it passes a value and not a string {} */}
            <Todos todos={todos} onDelete={onDelete} />{/*Function simple passed two parametes to the child class */}
            </>
          }/>
          

          <Route path="/about" element={
            <>
           <About/>
            </>
          }/>
          


        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
