import React from 'react'
import './style.css'
const FooterStyle={
 
  position:"relative",
  bottom:"-80vh",
  width:" 100%",
  backgroundColor: "whitesmoke",
  color:"black",
  
}
export const Footer = () => {
  return (
    <div className=" py-2  " style={FooterStyle}>
      <p className="text-center">
          Copyright &copy; My TODOS LIST
      </p>
    </div>
  )
}
