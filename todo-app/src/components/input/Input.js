import React from "react";
import "./Input.css";

const Input = (props) => {


  // capture click event from add item button
  // pass the item name from input field to create new item
  const handleInput = event => {
    let inputElement;
    if (event.type === "click") {
      inputElement = document.getElementById("new-item");
    }
    if (inputElement.value !== '') {
      props.newItem(inputElement.value);
    }


    inputElement.value = "";
  };

  //interface
  return (
    <div id="container">
      <input type="text" id="new-item" name="new-item" placeholder="Add a new item"/>
      <button id="add-button" onClick={handleInput}>
        Add Item
      </button>
    </div>
  );
};

export default Input;
