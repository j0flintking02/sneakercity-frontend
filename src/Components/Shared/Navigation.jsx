import React, {useState, useEffect} from 'react';
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.svg"
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";

function Navigation() {
    const cookies = new Cookies();
    const [cart] = useState(cookies.get('cart'))
    useEffect(() => {
        return () => {
            cookies.addChangeListener((data)=>{
                console.log(data)
            })
        };
    });

    return (
        <nav className="Navigation-container">
            <Link to="/listings">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="app-name">Sneaker City</h3>
            </Link>
            <div className="cart">
                <img className="cart-image" src={cartIcon}/>
                <span className="badge">{cart?cart.length:0}</span>
            </div>
        </nav>
    );
}

export default Navigation;
