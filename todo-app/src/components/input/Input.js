import React from "react";
import "./Input.css";

function Input() {
    return (
        <div id="container">
            <input type="text" name="new-item"/>
            <button>Add item</button>
        </div>
        
    );
}

export default Input;