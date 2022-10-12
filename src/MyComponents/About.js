import React from 'react'
import './aboutStyle.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';
 
export default function About() {
  return (

    <div className='acontainer' ><h1 className='ah1'>About the Developer</h1>
    <h4 className='ah4'>This site is developed by <a href="https://www.linkedin.com/in/yash-raj-612184227/">Yash Raj</a> as a REACT practice project.
    </h4>
    <h5 className='ah5'>For more details Please visit <a href="https://mysteryhawk17.github.io/ProfileCardUI/">https://mysteryhawk17.github.io/ProfileCardUI/</a></h5>
    <h3 className='ah3'>Thank you!!</h3>
    
    
    
    
    </div>
  )
}
