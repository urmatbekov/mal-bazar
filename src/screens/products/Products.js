import React from 'react';
import { connect } from 'react-redux';
import compose from "../../utils/compose"

const Products = ({products}) => {
    console.log(products)
    return (
        <div>
            
        </div>
    );
};

const msp = ({products}) => {
    return {products}
}

export default compose(
    connect(msp)
)(Products);