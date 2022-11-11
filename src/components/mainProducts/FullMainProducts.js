import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CATEGORY } from "../../config";
import { filterCategories } from "../../redux/action";
import "./fullMainProducts.scss";
import MainProductItem from "./MainProductItem";
import { Link } from "react-router-dom";
import Cart from "../../common/cart/Cart";
import "./fullMainProducts.scss";

function FullMainProducts(props) {
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
    <div className="full_main_products">
      <div className="main_part">
        {filterByCategory.map(({ idMeal, ...props }) => (
          <div className="card" key={idMeal}>
            <MainProductItem key={idMeal} {...props} idMeal={idMeal} />
          </div>
        ))}
        <Link to="/" className="back_previous_page">
          <button>Home</button>
        </Link>
      </div>
      <div className="cart_part">
        <Cart />
      </div>
    </div>
  );
}

export default FullMainProducts;
