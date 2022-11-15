import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action";

function MainProductItem({ strMeal, strMealThumb, idMeal, quantity }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.idMeal === idMeal);
    if (itemIndex < 0) {
      const newItem = {
        ...product,
        price: 120,
        quantity: 1,
      };
      dispatch(addToCart(newItem));
    } else {
      const newItem = cart.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            price: 120,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return newItem;
    }
    console.log(cart);
  };
  return (
    <>
      <div className="for_image">
        <Link to={`/mainProducts/fullList/${idMeal}`}>
          <img src={strMealThumb} alt="strThumb" />
        </Link>
      </div>
      <div className="for_info">
        <Link to={`/mainProducts/fullList/${idMeal}`}>{strMeal}</Link>
      </div>
      <div
        className="ingredients"
        onClick={() =>
          handleAddCart({ idMeal, strMeal, strMealThumb, quantity })
        }
      >
        Купить ингредиенты
      </div>
    </>
  );
}

export default MainProductItem;
