import React from "react";
import "./Item.css";

const Item = props => {

  return (
    <div id="listItem">
        <input type="checkbox"/><span>{props.name}</span> <span className="delete">X</span>
    </div>
  );
}

export default Item;