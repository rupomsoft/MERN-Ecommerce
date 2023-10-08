import React from 'react';
import MenuBar from "./Menu-Bar.jsx";
import Footer from "./Footer.jsx";

const Master = (props) => {
    return (
        <>
            <MenuBar/>
                {props.children}
            <Footer/>
        </>
    );
};

export default Master;