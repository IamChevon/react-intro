import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [inputData, setInputData] = useState("");

  const handleUpdate = event => {
    let input;
    if (event.type === "click") {
      input = document.getElementById("new-item").value;
    }
    setInputData(input);

    console.log(inputData);
  };

  return (
    <div id="container">
      <p>You entered {inputData}</p>
      <input type="text" id="new-item" name="new-item" />
      <button id="add-button" onClick={handleUpdate}>
        Add item
      </button>
    </div>
  );
};

export default Input;
