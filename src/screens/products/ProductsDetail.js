import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import compose from '../../utils/compose';

const ProductsDetail = ({ products }) => {
    const { productId } = useParams()
    const product = products.find((item) => item.id === +productId)
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-header">
                    <h1>{product.title}</h1>
                </div>
                <img src={product.image} alt={product.title} />
                <div className="card-body">
                    <p>
                        {product.description}
                    </p>
                    <button className="btn btn-primary">Buy</button>
                    <span className="btn">{product.price}</span>
                </div>
            </div>
        </div>
    );
};

const msp = ({ products }) => {
    return { products }
}

export default compose(
    connect(msp)
)(ProductsDetail);