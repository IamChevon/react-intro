import React from "react";
import ReactDOM from "react-dom";


// Basic Class component with props, state, stateChange
class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1986
        };
    }

    changeColor = () => {
        this.setState({ color: "blue" });
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

export default Car;