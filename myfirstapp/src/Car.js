import React from "react";
import ReactDOM from "react-dom";


// Basic Class component with props
class Car extends React.Component {

    render() {
        return <h2>A {this.props.color} {this.props.brand.model}</h2>;
    }
}

export default Car;