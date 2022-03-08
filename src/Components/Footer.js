import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position:"relative",
    top : "10vh",
    width : "100%",
    border : "2px solid red"
  }
  return (
    <footer className="bg-dark text-light my-3 py-3" style={footerStyle}>
      <p className="text-center"> &copy; MyTodosList.com</p>
    </footer>
  )
}

