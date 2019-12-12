import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./Nav.css";



function Nav() {
  const title = "Todo"


  return (
    <div>
      <Header title={title} />
      <nav class="nav">
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
