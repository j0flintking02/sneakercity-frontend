const products = [
    {
        id:1,
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: new Date(2020,2,19)
    },
    {
        id: 2,
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: new Date(2020,2,20)
    },
    {
        id: 3,
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: new Date(2020,2,21)
    },
    {
        id: 4,
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: new Date(2020,2,22)
    },
    {
        id: 5,
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: new Date(2020,2,23)
    },
    {
        id: 6,
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: new Date(2020,2,24)
    },
    {
        id: 7,
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: new Date(2020,2,25)
    },
    {
        id: 8,
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: new Date(2020,2,26)
    },
    {
        id: 9,
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: new Date(2020,2,27)
    },
    {
        id: 10,
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: new Date(2020,2,28)
    },
    {
        id: 11,
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: new Date(2020,2,29)
    },
    {
        id: 12,
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: new Date(2020,2,30),
        sizes: [39, 40, 41,43]
    },
    {
        id: 13,
        brand_name: 'Nike',
        model: 'Air Force 1 Low',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/216a275e-5d00-4eae-9281-76787d921b27/air-force-1-low-shoe-r57dLb.png',
        release_date: new Date(2020,2,31),
        sizes: [39, 40, 41,43]
    },
    {
        id: 14,
        brand_name: 'Nike',
        model: 'Air Max 270',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.png',
        release_date: new Date(2020,3,1),
        sizes: [39, 40, 41,43]
    },
    {
        id: 15,
        brand_name: 'Nike',
        model: 'Air Zoom Pegasus 38 A.I.R. Kelly Anna London',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png',
        release_date: new Date(2020,3,2),
        sizes: [39, 40, 41,43]
    },
    {
        id: 16,
        brand_name: 'Nike',
        model: 'Nike SB Zoom Blazer Mid Premium',
        price: '200',
        picture: 'https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/eb7db080-dc1e-44cd-bd5d-28619ab11ba7/sb-zoom-blazer-mid-skate-shoe-Fl1qfb.png',
        release_date: new Date(2020,3,3),
        sizes: [39, 40, 41,43]
    }
]

export default products;
