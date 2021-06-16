import React, {useEffect, useState} from "react";

import '../../scss/App.scss';
import ProductCard from "../Shared/ProductCard";
import products from "../../dummyData/products";
import {Link} from "react-router-dom";

function Home() {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        const getList = products.slice(0, 10).sort((a, b)=> b.release_date - a.release_date)
        setProductList(getList)
    },[])
    return (
        <div className="home-container">
            <header>
                <h1>New Arrivals</h1>
            </header>
            {productList&&<div className="product-list">
                {productList.map((product) => (
                    <Link key={product.id} to={`/listings/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>}
        </div>
    );
}

export default Home;
