import React from 'react';
import ProductList from '../../components/product-list/ProductList';
import Search from '../../components/search/Search';

const Home = () => {
    return (
        <div>
            <Search/>
            <ProductList/>
        </div>
    );
};

export default Home;