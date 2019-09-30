import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainContent from "./components/maincontent/MainContent";

function App() {
    return (
        <div>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </div>
    );
}
export default App;