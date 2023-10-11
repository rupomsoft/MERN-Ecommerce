import React from 'react';
import Slider from "../component/Slider.jsx";
import Features from "../component/Features.jsx";
import Categories from "../component/Categories.jsx";
import Brands from "../component/Brands.jsx";
import Products from "../component/Products.jsx";
import Master from "../component/Master.jsx";
import ScrollToTop from "../component/ScrollToTop.jsx";

const HomePage = () => {
    return (
        <>
            <Master>
                <ScrollToTop/>
                <Slider/>
                <Features/>
                <Categories/>
                <Products/>
                <Brands/>
            </Master>
        </>
    );
};

export default HomePage;