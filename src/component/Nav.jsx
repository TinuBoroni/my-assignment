import React from "react";
import { Link } from "react-router-dom";

// create a Navbar component

function Nav() {
  const navStyle = {
    color:"white"

  };

  return (
    <nav>
      <h3>ARIETE</h3>
      <ul className="nav-links">

      <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>

        <Link style={navStyle} to="/product">
          <li>Product</li>
          </Link>

          <Link style={navStyle} to="/User">
          <li>User</li>
          </Link>
        

      </ul>
    </nav>
  );
}

export default Nav;



    