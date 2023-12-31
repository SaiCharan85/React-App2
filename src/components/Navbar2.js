import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
function Navbar() 
{
  
    return (

      <div>
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/business">Business</Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" to="#">Action</a>
          <a className="dropdown-item" to="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" to="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" to="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    )
  }


export default Navbar

