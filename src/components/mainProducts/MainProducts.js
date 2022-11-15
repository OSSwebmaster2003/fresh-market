import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CATEGORY } from "../../config";
import { filterCategories } from "../../redux/action";
import { Swiper, SwiperSlide } from "swiper/react";
import MainProductItem from "./MainProductItem";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./mainProducts.scss";

function MainProducts(props) {
  const { categorizedItems, filterByCategory } = useSelector((state) => state);
  const dispatch = useDispatch();

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
        <Link to="/mainProducts/fullList">
          <p>Показать все</p>
        </Link>
      </div>
      <div className="main_products_section">
        <div className="wrapper_main_products_section">
          <Swiper
            breakpoints={{
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
              1100: {
                width: 700,
                slidesPerView: 2,
              },
              0: {
                width: 0,
                slidesPerView: 1,
              },
            }}
            spaceBetween={20}
            // slidesPerView={3}
            // {...params}
            modules={[Navigation]}
            navigation
          >
            {filterByCategory.slice(0, 6).map(({ idMeal, ...props }) => (
              <SwiperSlide>
                {<MainProductItem key={idMeal} {...props} idMeal={idMeal} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
