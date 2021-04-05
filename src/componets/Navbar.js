import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
// import logo from "../images/mylogo.png";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
  <NavLink className="navbar-brand" to="/">
    {/* <img src= "alt="Logo"/> */}
    Mern Project
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>

      <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
      <li class="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
     
      <li class="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar;
