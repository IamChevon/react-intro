import React from "react";
import ReactDOM from "react-dom";
// const firstelement = (
//   <div>
//     <h1>Hello from React</h1>
//     <p>This is a aragraph</p>
//   </div>
// );

class Car extends React.Component {
    
        render() {
            return <h2> Hi, Im a Car</h2>;
        }
}

ReactDOM.render(<Car/>, document.getElementById("root"));

// ReactDOM.render(firstelement, document.getElementById("root"));
