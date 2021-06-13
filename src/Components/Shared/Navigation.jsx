import React from 'react';
import logo from "../../assets/logo.png";

function Navigation() {
    return (
        <nav className="Navigation-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="app-name">Sneaker City</h3>
        </nav>
    );
}

export default Navigation;
