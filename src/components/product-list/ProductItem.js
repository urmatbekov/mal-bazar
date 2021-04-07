import React from 'react';
import { Link } from "react-router-dom"

const ProductItem = ({ item }) => {
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
            </div>
        </div>
    );
};

export default ProductItem;