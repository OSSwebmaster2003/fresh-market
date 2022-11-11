import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CATEGORY } from "../../config";
import { filterCategories } from "../../redux/action";
import { Swiper, SwiperSlide } from "swiper/react";
import MainProductItem from "./MainProductItem";
import { Navigation } from "swiper";
import "swiper/css";
// import "../../../node_modules/swiper/modules/navigation";
import "swiper/css/navigation";
import "./mainProducts.scss";

function MainProducts(props) {
  const { categorizedItems, filterByCategory } = useSelector((state) => state);
  const dispatch = useDispatch();

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  useEffect(() => {
    fetch(FILTER_CATEGORY + categorizedItems[0].strCategory)
      .then((res) => res.json())
      .then((data) => dispatch(filterCategories(data.meals)))
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, [categorizedItems[0].strCategory]);
  return (
    <div className="main_products">
      <div className="heading">
        {categorizedItems &&
          categorizedItems.map((item) => (
            <h1 key={item.idCategory}>{item.strCategory}</h1>
          ))}
        <p>Показать все</p>
      </div>
      <div className="main_products_section">
        <div className="wrapper_main_products_section">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            // {...params}
            modules={[Navigation]}
            navigation
          >
            {filterByCategory.slice(0, 6).map(({ idMeal, ...props }) => (
              <SwiperSlide>
                {<MainProductItem key={idMeal} {...props} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
