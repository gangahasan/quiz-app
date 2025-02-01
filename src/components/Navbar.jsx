import React from 'react'
import { NavLink } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navlink">
        Home
      </NavLink>
      <NavLink to="/quiz" className="navlink">
        {" "}
        Quiz
      </NavLink>
      <NavLink to="/result" className="navlink">
        result
      </NavLink>
    </div>
  );
}

export default Navbar