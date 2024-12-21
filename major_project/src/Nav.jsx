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
            <Link to="/">signup</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/admin">admin</Link>
          </li>
        </ul>

      
        <select name="" id="">
          <option value="">Movies</option>
          <option value="">Holywood</option>
          <option value="">Bollywood</option>
          <option value="">Tollywood</option>
        </select>
      </div>
    </div>
    
  );
};

export default Navbar;