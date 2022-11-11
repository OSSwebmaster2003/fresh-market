import React from "react";
import { SwiperSlide } from "swiper/react";

function MainProductItem({ strMeal, strMealThumb, idMeal }) {
  return (
    <>
      <div className="for_image">
        <img src={strMealThumb} alt="strThumb" />
      </div>
      <div className="for_info">
        <p>{strMeal}</p>
      </div>
      <div className="ingredients">Купить ингредиенты</div>
    </>
  );
}

export default MainProductItem;
