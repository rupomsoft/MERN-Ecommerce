import React from 'react';
import MenuBar from "./Menu-Bar.jsx";
import Footer from "./Footer.jsx";
import Loader from "./loader/Loader.jsx";

const Master = (props) => {
    return (
        <>
            <MenuBar/>
                {props.children}
            <Loader/>
            <Footer/>
        </>
    );
};

export default Master;