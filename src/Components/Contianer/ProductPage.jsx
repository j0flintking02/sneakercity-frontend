import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios'
import moment from "moment";
import Cookies from 'universal-cookie';
import {useToasts} from "react-toast-notifications";
import Navigation from "../Shared/Navigation";

const ProductPage = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const [updated, setUpdated] = useState(false);
    const {addToast} = useToasts();


    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/listings/${id}`).then(response => {
            setProduct(response.data.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [id])
    const [sizeSelect, setSizeSelected] = useState(null);
    const cookies = new Cookies();

    const handleCart = (prod) => {
        let product = []
        let quantity = 0
        const cart = cookies.get('cart')
        if(!prod.size) return addToast('Please select a size', {appearance: 'error', autoDismiss: true});
        if (cart) {
            const productToUpdateIndex = cart.findIndex(sm => sm.id === prod.id && sm.size === prod.size);
            const productToUpdate = cart.filter(sm => sm.id === prod.id && sm.size === prod.size);

            if (productToUpdate && productToUpdateIndex !== -1) {
            // Increase the product quantity if it already exists
                cart[productToUpdateIndex] = {...prod, quantity: ++(productToUpdate[0].quantity)};
                const newCart = cart.filter((item, index) => index !== productToUpdateIndex);
                newCart.splice(productToUpdateIndex, 0, productToUpdate[0]);
                cookies.set('cart', [...newCart], {path: '/'});
                setUpdated(true)
                addToast('Edited your cart cart', {appearance: 'success', autoDismiss: true});
            } else {
                // Update the cart if there are already products in the cart
                product = [...cart, {...prod, id: prod.id, size: prod.size, quantity: quantity += 1}];
                cookies.set('cart', product, {path: '/', sameSite: 'Strict'});
                setUpdated(true)
                addToast('Added to cart', {appearance: 'success', autoDismiss: true});
            }

        } else {
            // Add a new product to the cart is empty
            product = [{...prod, id: prod.id, size: prod.size, quantity: quantity += 1}];
            cookies.set('cart', product, {path: '/', sameSite: 'Strict'});
            setUpdated(true)
            addToast('Added to cart', {appearance: 'success', autoDismiss: true});
        }
    }
    return (
        <>
            <Navigation updated={updated} setUpdated={setUpdated}/>
            <div className="productPage-container">
                <div className="back-button">
                    <Link to='/listings'> {'<'} Back </Link>
                </div>
                {product &&
                <div className="product-card-container" style={{display: 'flex', height: 'calc(100vh - 17rem)'}}>
                    <div className="cover-image" style={{
                        backgroundImage: `url(${product.picture})`,
                    }}>
                    </div>
                    <div className="product-card-details">
                        <h1>{product.brand_name}</h1>
                        <p>{product.model}</p>
                        <p>${product.price}</p>
                        <p>Release date: {moment(product.release_date).format('DD/MM/YYYY')}</p>
                        <p>Quantity left:{product.price}</p>
                        <ul className="sizes">
                            {product.sizes.map((size, index) => (
                                <li
                                    key={index}
                                    onClick={() => setSizeSelected(size)}
                                    style={sizeSelect === size
                                        ? {
                                            color: '#2b2d42ff',
                                            fontWeight: '700',
                                            border: '#2b2d42ff solid 1px',
                                            boxShadow: '0 0.5rem 1rem rgba(#2b2d42ff, 0.2)'
                                        }
                                        : null}>{size}</li>
                            ))}
                        </ul>
                        <button className="btn" onClick={() => handleCart({...product, size: sizeSelect})}>Add To Cart
                        </button>
                    </div>
                </div>}
            </div>
        </>
    )
};


export default ProductPage;
