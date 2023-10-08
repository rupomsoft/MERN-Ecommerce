import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import DetailsPage from "./pages/details-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;