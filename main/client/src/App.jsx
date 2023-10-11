import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import DetailsPage from "./pages/details-page.jsx";
import VerifyPage from "./pages/verify-page.jsx";
import LoginPage from "./pages/login-page.jsx";
const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/verify/:email" element={<VerifyPage/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;