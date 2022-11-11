import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

function MainProductItem({ strMeal, strMealThumb, idMeal }) {
  return (
    <>
      <div className="for_image">
        <Link to={`/mainProducts/fullList/${idMeal}`}>
          <img src={strMealThumb} alt="strThumb" />
        </Link>
      </div>
      <div className="for_info">
        <p>{strMeal}</p>
      </div>
      <div className="ingredients">Купить ингредиенты</div>
    </>
  );
}

export default MainProductItem;
