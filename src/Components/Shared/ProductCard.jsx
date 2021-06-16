import React from 'react';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
product: PropTypes.shape({}).isRequired
};

function ProductCard({product}) {
    return (
        <div className="product-card-container">
            <div className="product-card-details">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h4 className="product-card-details_title">{product.brand_name}</h4>
                    <span className="product-card-details_subtitle">${product.price}</span>
                </div>
                <p className="product-card-details_subtitle">{product.model}</p>
                {/*<p className="product-card-details_subtitle">{product.release_date}</p>*/}
            </div>
            <div className="product-card-details">
                <img src={product.picture} alt="product"/>
            </div>
        </div>
    );
}

export default ProductCard;
