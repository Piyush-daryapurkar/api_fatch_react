import React from "react";
import { Link } from "react-router-dom";
import './css/Nav.css'

const Navbar = () => {
  return (
    <div className="nav_boss">
      <div className="nav_logo">
        <img src="vite.svg" alt="" />
      </div>
      <div className="nav_list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <select name="" id="">mo
          <option value="">movies</option>
          <option value="">Holywood</option>
          <option value="">Bollywood</option>
          <option value="">Tollywood</option>
        </select>
      </div>
    </div>
    
  );
};

export default Navbar;