import React from "react";
import "./Item.css";

const Item = props => {

  return (
    <div>
        <input type="checkbox"/><span>{props.name}</span>
    </div>
  );
}

export default Item;