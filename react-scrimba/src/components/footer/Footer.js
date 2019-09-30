import React from "react";

function Footer() {

    let style = {
        display: "inline-block"
    }

    let itemStyle = {
        padding: "3rem"
    }
    return (
        <footer style= {style}>
            <span style= {itemStyle}>item</span>
            <span style= {itemStyle}>item</span>
            <span style= {itemStyle}>item</span>
        </footer>
    );
}

export default Footer;