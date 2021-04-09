import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { compose } from 'redux';
import {addToCart} from "../../reduce/cart"
import Toast from "../../utils/alert"

const ProductItem = ({ item,addToCart }) => {
    const onAddToCart = () => {
        addToCart(item)
        Toast.fire({icon:"success",title:"Added to cart"})
    }
    return (
        <div className="card">
            <img className="card-img-top" src={item.image} alt={item.title} />
            <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">
                    {item.description}
                </p>
                <Link to={"/products/" + item.id} className="btn btn-primary">Detail</Link>
                <span className="btn btn-link">{item.price}</span>
                <button className="btn btn-primary" onClick={onAddToCart}>Add</button>
            </div>
        </div>
    );
};

const msp = (state) => {
    return {}
}

export default compose(
    connect(msp,{addToCart})
)(ProductItem);