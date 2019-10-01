import React from "react";
import "./Input.css";

function Input() {
    return (
        <div id="container">
            <input type="text" id="new-item" name="new-item"/>
            <button id="add-button">Add item</button>
        </div>
        
    );
}

export default Input;