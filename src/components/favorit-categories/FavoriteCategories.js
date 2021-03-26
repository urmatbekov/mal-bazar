import React from 'react';
import FavoritCategory from './FavoritCategory';
import './favorite-category.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css"
import { connect } from 'react-redux';

const FavoriteCategories = ({ categories }) => {
    return (
        <div className="d-flex">
            <Swiper slidesPerView={5}>
                {categories.map((category) => (
                    <SwiperSlide><FavoritCategory category={category} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const mapStateToProps = ({categories}) => {
    return {categories}
}

export default connect(mapStateToProps)(FavoriteCategories);