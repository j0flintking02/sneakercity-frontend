import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import moment from "moment";
import Cookies from 'universal-cookie';

const ProductPage = (props) => {
    let {id} = useParams();
    const [product] = useState({
        id,
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_600,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: new Date(2020,2,20),
        description: "lorem ipsum",
        sizes: [39, 40, 41,43],
        quantity: 12
    });
    const [sizeSelect, setSizeSelected] = useState(null);
    const cookies = new Cookies();

    const handleCart = (prod) => {
        let product = []
        let quantity = 0
        const cart = cookies.get('cart')
        if (cart){
            const productToUpdateIndex = cart.findIndex(sm => sm.id === prod.id);
            const productToUpdate = cart.filter(sm => sm.id === prod.id);
            if (productToUpdate && productToUpdateIndex !== -1) {
                if (prod.size === productToUpdate[productToUpdateIndex].size){
                    cart[productToUpdateIndex] = {...prod, quantity: (productToUpdate[productToUpdateIndex].quantity)+=1};
                    console.log(cart, 'old size');
                    cookies.set('cart', cart, { path: '/' });
                } else {
                    cart[productToUpdateIndex] = {...prod, size: prod.size, quantity: quantity=+1}
                    console.log(cart, 'new size');
                    cookies.set('cart', cart, { path: '/' });
                }
            } else {
                product = [...cart, {id:prod.id, size: prod.size, quantity: quantity=+1}];
                cookies.set('cart', product, { path: '/' });
            }

        } else {
            product = [{id:prod.id, size: prod.size, quantity: quantity=+1}];
            cookies.set('cart', product, { path: '/' });
        }
    }
    return (
        <div className="productPage-container">
            <div className="back-button">
                <Link to='/listings'> Back </Link>
            </div>
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
                                    ?{
                                    color: '#2b2d42ff',
                                        fontWeight: '700',
                                        border: '#2b2d42ff solid 1px',
                                        boxShadow: '0 0.5rem 1rem rgba(#2b2d42ff, 0.2)'}
                                    :null}>{size}</li>
                        ))}
                    </ul>
                    <button className="btn" onClick={()=> handleCart({id, size:sizeSelect}) }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
};

export default ProductPage;
