import React from "react";
import "./Item.css";

const Item = props => {

  const deleteItem = event => {
    let inputElement;
    if (event.type === "click") {
      inputElement = document.getElementById(`${props.name}`);
    }

    props.deleteItem(inputElement.id);
  }

  return (
    <div id={props.name} className="listItem">
      <div><input type="checkbox" /><span className="item">{props.name}</span></div>
      <span className="delete" onClick={deleteItem}>X</span>

    </div>
  );
}

export default Item;