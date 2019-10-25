import React from "react";
import "./Input.css";

const Input = (props) => {
  

  const handleInput = event => {
    let inputElement;
    if (event.type === "click") {
      inputElement = document.getElementById("new-item");
    }
    props.newItem(inputElement.value);

    inputElement.value = "";
  };

  return (
    <div id="container">
      <input type="text" id="new-item" name="new-item" />
      <button id="add-button" onClick={handleInput}>
        Add Item
      </button>
    </div>
  );
};

export default Input;
