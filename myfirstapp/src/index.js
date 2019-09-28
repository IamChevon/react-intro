import React from "react";
import ReactDOM from "react-dom";
import Car from './Car.js';
// const firstelement = (
//   <div>
//     <h1>Hello from React</h1>
//     <p>This is a aragraph</p>
//   </div>
// );

// // Basic Class component with props
// class Car extends React.Component {

//     render() {
//         return <h2>A {this.props.color} Car</h2>;
//     }
// }


// class component with parent construtor and state

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: 'Red'}
//     }

//     render() {
//         return <h2>I am a {this.state.color} car.</h2>
//     }
// }

class Garage extends React.Component {
    render() {
        const carinfo = {name: "Ford", model: "Mustang"};
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car color="red" brand={carinfo}/>
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById("root"));

// ReactDOM.render(firstelement, document.getElementById("root"));
