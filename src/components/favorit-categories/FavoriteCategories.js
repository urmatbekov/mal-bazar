import React from 'react';
import FavoritCategory from './FavoritCategory';
import './favorite-category.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css"

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

export default FavoriteCategories;