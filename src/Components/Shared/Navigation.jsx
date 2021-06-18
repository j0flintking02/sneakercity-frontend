import React, {useEffect, useState,} from 'react';
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.svg"
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
import {SettingsContext} from "../../hooks/settings-context";
import {useToasts} from "react-toast-notifications";

function Navigation(props) {
    const cookies = new Cookies();
    const [cart, setCart] = useState(cookies.get('cart'))
    const [openCart, setOpenCart] = useState(false)
    const {addToast} = useToasts();

    useEffect(() => {
            setCart(cookies.get('cart'))
            props.setUpdated(false)
    },[props.updated] );

    const handleRemove = (prod) => {
        if (prod.quantity > 1){
            //Update the cart if the quantity is greater then 1
            const productToUpdateIndex = cart.findIndex(sm => sm.id === prod.id && prod.size === sm.size);
            const productToUpdate = cart.filter(sm => sm.id === prod.id && prod.size === sm.size);
            console.log(productToUpdate)
            cart[productToUpdateIndex] = {...prod, quantity: --(productToUpdate[0].quantity)};
            const newCart = cart.filter((item, index) => index !== productToUpdateIndex);
            newCart.splice(productToUpdateIndex, 0, productToUpdate[0]);
            props.setUpdated(true)
            cookies.set('cart', [...newCart], {path: '/'});
        }else {
            // Delete the item if the quantity is less than 1
            const NewCart = cart.filter(sm => prod.size !== sm.size || prod.id !== sm.id);
            cookies.set('cart', NewCart, { path: '/', sameSite: 'Strict' });
            setCart(NewCart)
            addToast('Removed Item From cart', { appearance: 'warning', autoDismiss: true });
        }
    }

    return (
        <SettingsContext.Consumer>
            {(data) => (
                <div className="container-main">
                <nav className="Navigation-container">
                    <Link to="/listings">
                        <img src={logo} className="App-logo" alt="sneakerCity-Logo"/>
                        <h3 className="app-name">{data.app_name}</h3>
                    </Link>
                    <div className="cart">
                        <img className="cart-image" src={cartIcon} alt="cart-icon" onClick={()=> setOpenCart(!openCart)}/>
                        <span className="badge">{cart ? cart.length : 0}</span>

                        {openCart&&<div className="view-cart">
                            {cart.length > 0 ?
                            cart.map((item)=> (
                                <div className="item">
                                    <img src={item.picture} alt=""/>
                                    <small>{item.model} ({item.size}) <span style={{paddingLeft: '4px', color: "grey"}}>X {item.quantity}</span></small>
                                    <small>
                                        ${item.price}
                                        <button onClick={() => handleRemove(item)}>x</button>
                                    </small>
                                </div>
                            )):(
                                    <div className="item" style={{ textAlign: 'center'}}>
                                       <small>Empty cart</small>
                                    </div>
                                )}
                            <div className="checkout">
                                <a href="/">Checkout</a>
                            </div>

                        </div>}
                    </div>
                </nav>
                </div>
            )}
        </SettingsContext.Consumer>
    );
}

export default Navigation;
