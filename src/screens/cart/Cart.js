import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import './cart.css'

const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <h1>Cart</h1>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Total Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cartItems.map((cartItem,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{cartItem.product.title}</td>
                            <td>
                                <img className="rounded-circle" src={cartItem.product.image} width="70px" alt=""/>
                            </td>
                            <td>
                                {cartItem.product.price}
                            </td>
                            <td>
                                {cartItem.count}
                            </td>
                            <td>
                                {parseInt(cartItem.product.price)*cartItem.count}
                            </td>
                            <td>
                                <button className="btn btn-danger">Del</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-right">Total Price: {cart.cartItems.reduce((ans,item)=>ans+item.count*parseInt(item.product.price),0)}</p>
        </div>
    );
};

const msp = ({ cart }) => {
    return { cart }
}

export default compose(
    connect(msp)
)(Cart);