import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <body className="background">
    <div className="navbar">
      <h1 className="logo">
        <span className="text-primary"
          ><i className="fas fa-fish"></i> Ocean </span>
          Survey
      </h1>
      <nav >
        <ul>
            <Link to= "/"><li>Home</li></Link>
            <Link to= "/about"><li>About</li></Link>
            <Link to= "/login"><li>Login</li></Link>
        </ul>
      </nav>
    </div>
    </body>
  )
};

export default Navbar;

