import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cart from "../../common/cart/Cart";
import { FILTER_AREA } from "../../config";
import { filterByArea, filterCategories } from "../../redux/action";
import MainProductItem from "../mainProducts/MainProductItem";
import "./area.scss";

function Area(props) {
  const { spArea } = useParams();
  const { area, filterByCategory } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(FILTER_AREA + spArea)
      .then((res) => res.json())
      .then((data) => dispatch(filterByArea(data.meals)))
      .catch((err) => console.log(err));
  }, [spArea]);
  return (
    <div className="area">
      <div className="area_wrapper">
        <div className="main_part">
          <div className="for_header">{spArea} foods</div>
          <div className="for_main_info">
            {area.map(({ idMeal, ...props }) => (
              <div className="card" key={idMeal}>
                <MainProductItem key={idMeal} {...props} idMeal={idMeal} />
              </div>
            ))}
          </div>
          <Link to="/" className="back_previous_page">
            <button>Home</button>
          </Link>
        </div>
        <div className="cart_part">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Area;
