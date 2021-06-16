import React, {useEffect, useState} from "react";
import axios from "axios";

import '../../scss/App.scss';
import ProductCard from "../Shared/ProductCard";
import {Link} from "react-router-dom";

function Home() {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/listings').then(response => {
            console.log(response.data.data);
            const getList = response.data.data.slice(0, 10)
            setProductList(getList)
        }).catch((e) => {
            console.log(e)
        })
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
