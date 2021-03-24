import React, { useState } from 'react';
import Home from '../screens/home/Home';
import categoriesData from "../data/categories"
import Category from '../screens/category/Category';
import { Route,Link } from "react-router-dom"
import About from '../screens/about/About';

const App = () => {
    const [categories, setCategories] = useState(categoriesData)
    return (
        <div className="container border shadow-sm mt-5 rounded">
            <h1>Mal Bazar</h1>
            <main>
                <Route path="/" exact>
                    <Home categories={categories} />
                </Route>
                <Route path="/category/:slug" exact>
                    <Category categories={categories}/>
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
            </main>
        </div>
    );
};

export default App;