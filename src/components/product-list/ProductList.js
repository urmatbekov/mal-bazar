import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    console.log(products)
    return (
        <div>
            <h2 className="text-center">Products</h2>
            <div className="row">
                {products.map((item) => (
                    <div key={item.id} className="col-md-4 col-sm-6 mt-4">
                        <ProductItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const msp = ({ products }) => {
    return { products }
}

export default compose(
    connect(msp)
)(ProductList);