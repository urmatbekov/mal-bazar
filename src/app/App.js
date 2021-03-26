import React from 'react';
import Home from '../screens/home/Home';
import Category from '../screens/category/Category';
import { Route } from "react-router-dom"
import About from '../screens/about/About';

const App = () => {
    return (
        <div className="container border shadow-sm mt-5 rounded">
            <h1>Mal Bazar</h1>
            <main>
                <Route path="/" exact>
                    <Home  />
                </Route>
                <Route path="/category/:slug" exact>
                    <Category />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
            </main>
        </div>
    );
};

export default App;