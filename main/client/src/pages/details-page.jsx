import React from 'react';
import Master from "../component/Master.jsx";
import Details from "../component/Details.jsx";
import ScrollToTop from "../component/ScrollToTop.jsx";

const DetailsPage = () => {
    return (
        <Master>
            <ScrollToTop/>
            <Details/>
        </Master>
    );
};

export default DetailsPage;