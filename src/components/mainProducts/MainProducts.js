import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CATEGORY } from "../../config";
import { filterCategories } from "../../redux/action";
import MainProductItem from "./MainProductItem";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  // react-slick settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
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
          <Slider {...settings}>
            {filterByCategory.slice(0, 6).map(({ idMeal, ...props }) => (
              <MainProductItem key={idMeal} {...props} idMeal={idMeal} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
