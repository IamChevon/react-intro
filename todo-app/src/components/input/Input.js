import React from "react";
import "./Input.css";

const Input = (props) => {
  

  const handleUpdate = event => {
    let input;
    if (event.type === "click") {
      input = document.getElementById("new-item").value;
    }
    props.newItem(input);
  };

  return (
    <div id="container">
      <input type="text" id="new-item" name="new-item" />
      <button id="add-button" onClick={handleUpdate}>
        Add Item
      </button>
    </div>
  );
};

export default Input;
