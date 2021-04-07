import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            
        </div>
    );
};

const msp = ({cart}) => {
    return {cart}
}

export default compose(
    connect()
)(Cart);