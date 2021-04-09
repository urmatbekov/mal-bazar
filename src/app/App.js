import React from 'react';
import Home from '../screens/home/Home';
import Category from '../screens/category/Category';
import { Route } from "react-router-dom"
import About from '../screens/about/About';
import Navbar from "../components/navbar/Navbar"
import Login from '../screens/login/Login';
import { useEffect } from 'react';
import http from '../service/http';
import { setUser } from '../reduce/user';
import { connect } from 'react-redux';
import ProductsDetail from '../screens/products/ProductsDetail';
import FavoriteCategories from "../components/favorit-categories/FavoriteCategories"
import Cart from '../screens/cart/Cart';

const App = ({ setUser }) => {

    useEffect(() => {
        http.get("/auth/users/me/").then((res) => {
            setUser(res.data)
        })
    }, [])
    return (
        <div className="mb-5">
            <header>
                <Navbar />
            </header>
            <div className="container border shadow-sm mt-5 rounded">
                <main>
                    <h1 className="text-center">Mal Bazar</h1>
                    <FavoriteCategories />
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/category/:slug" exact>
                        <Category />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/products/:productId" exact>
                        <ProductsDetail />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                </main>
            </div>
        </div>
    );
};

const msp = ({ }) => {
    return {}
}

export default connect(msp, { setUser })(App);