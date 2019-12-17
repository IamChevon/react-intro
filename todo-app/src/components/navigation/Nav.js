import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";



function Nav() {

  return (
    <div>
      <nav className="nav">
        <ul>
          <Link to="/tasks">
            <li>Tasks</li>
          </Link>
          <Link to="/done">
            <li>Done</li>
          </Link>

        </ul>
      </nav>
    </div>

  );

}

export default Nav;
