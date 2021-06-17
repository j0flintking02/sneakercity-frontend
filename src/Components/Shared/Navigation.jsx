import React, {useEffect, useState,} from 'react';
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.svg"
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
import {SettingsContext} from "../../hooks/settings-context";

function Navigation() {
    const cookies = new Cookies();
    const [cart] = useState(cookies.get('cart'))
    useEffect(() => {
        return () => {
            cookies.addChangeListener((data) => {
                console.log(data)
            })
        };
    });

    return (
        <SettingsContext.Consumer>
            {(data) => (
                <nav className="Navigation-container">
                    <Link to="/listings">
                        <img src={logo} className="App-logo" alt="sneakerCity-Logo"/>
                        <h3 className="app-name">{data.app_name}</h3>
                    </Link>
                    <div className="cart">
                        <img className="cart-image" src={cartIcon} alt="cart-icon"/>
                        <span className="badge">{cart ? cart.length : 0}</span>
                    </div>
                </nav>
            )}
        </SettingsContext.Consumer>
    );
}

export default Navigation;
