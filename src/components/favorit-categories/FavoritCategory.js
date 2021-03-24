import React from 'react';
import {Link} from "react-router-dom"

const FavoritCategory = ({category}) => {
    return (
        <Link to={"/category/"+category.slug} className="fav-category p-5">
            <img src={category.image} alt="fghf"/>
            <h2 className="text-center">{category.title}</h2>
        </Link>
    );
};

export default FavoritCategory;