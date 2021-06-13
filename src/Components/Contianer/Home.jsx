import React, {useEffect, useState} from "react";

import '../../scss/App.scss';
import ProductCard from "../Shared/ProductCard";

const products = [
    {
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: '2020/02/19'
    },
    {
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: '2020/02/19'
    }
    ]
function Home() {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        setProductList(products.slice(0, 10))
    },[])
    return (
        <div className="home-container">
            <header>
                <h3>New Arrivals</h3>
            </header>
            <div className="product-list">
                {productList.map((product) => (
                    <ProductCard product={product} />
                ))
                }
            </div>
        </div>
    );
}

export default Home;
