import React from "react";
import "./Header.css";
const Header = props => {
    const title = props.title;
    return (
        <h1>{title}</h1>
    );
}

export default Header;