import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import DetailsPage from "./pages/details-page.jsx";
import VerifyPage from "./pages/verify-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import WishPage from "./pages/wish-page";
import CartPage from "./pages/cart-page.jsx";
import Profile from "./pages/profile.jsx";
import ProductByBrand from "./pages/product-by-brand.jsx";
import ProductBySearch from "./pages/product-by-search.jsx";
import ProductByCategory from "./pages/product-by-category.jsx";
const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/verify/:email" element={<VerifyPage/>}/>
                    <Route path="/wish" element={<WishPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/product-by-brand/:brand" element={<ProductByBrand/>}/>
                    <Route path="/product-by-search/:keyword" element={<ProductBySearch/>}/>
                    <Route path="/product-by-category/:category" element={<ProductByCategory/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;