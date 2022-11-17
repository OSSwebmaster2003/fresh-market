import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action";

function MainProductItem({ strMeal, strMealThumb, idMeal }) {
  const dispatch = useDispatch();
  const { cart, quantity } = useSelector((state) => state);

  const handleAddCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.idMeal === product.idMeal);

    const addItem = () => {
      if (itemIndex < 0) {
        const newItem = {
          ...product,
          price: 120,
          quantity: 1,
        };
        return [...cart, newItem];
      } else {
        const newCart = cart.map((item, index) => {
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
        return newCart;
      }
    };

    dispatch(addToCart(addItem()));

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
        onClick={() => handleAddCart({ idMeal, strMeal, strMealThumb })}
      >
        Купить ингредиенты
      </div>
    </>
  );
}

export default MainProductItem;

const bs = [1, 2, 3];
const d = bs.map((item) => {
  return item + 1;
});
console.log(d);
