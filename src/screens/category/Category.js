import React from 'react';
import { useParams } from 'react-router-dom';
import {connect} from "react-redux"

const Category = ({categories}) => {
    const {slug} = useParams()
    const category = categories.find((item) => item.slug===slug)
    return (
        <div>
            <h1>{category.title}</h1>
            <img className="w-25" src={category.image} alt=""/>
        </div>
    );
};

const mapStateToProps = ({categories}) => {
    return {categories}
}

export default connect(mapStateToProps)(Category);