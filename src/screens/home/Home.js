import React from 'react';
import FavoriteCategories from '../../components/favorit-categories/FavoriteCategories';
import ProductList from '../../components/product-list/ProductList';
import Search from '../../components/search/Search';

const Home = () => {
    return (
        <div>
            <Search/>
            <FavoriteCategories />
            <ProductList/>
        </div>
    );
};

export default Home;