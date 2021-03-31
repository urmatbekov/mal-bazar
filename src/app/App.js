import React from 'react';
import Home from '../screens/home/Home';
import Category from '../screens/category/Category';
import { Route } from "react-router-dom"
import About from '../screens/about/About';
import Navbar from "../components/navbar/Navbar"
import Login from '../screens/login/Login';

const App = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <div className="container border shadow-sm mt-5 rounded">
                <main>
                    <h1 className="text-center">Mal Bazar</h1>
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
                </main>
            </div>
        </div>
    );
};

export default App;