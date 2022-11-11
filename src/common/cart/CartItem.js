import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/action";

function CartItem({ strMeal, strMealThumb, quantity }) {
  const { cart } = useSelector((state) => state);
  // let quantity = 1;
  // const dispatch = useDispatch();
  // const handleQuantityInc = () => {
  //   // dispatch(increaseQuantity());
  //   quantity = quantity + 1;
  // };
  // const handleQuantityDec = () => {
  //   // dispatch(decreaseQuantity());
  //   quantity--;
  // };
  console.log(cart);
  return (
    <div className="cart_top_item">
      <div className="card">
        <div className="for_image">
          <img src={strMealThumb} alt="" />
        </div>
        <div className="for_count">
          <div className="increment" onClick={() => quantity++}>
            +
          </div>
          <div className="amount">{quantity}</div>
          <div className="decrement" onClick={() => quantity--}>
            -
          </div>
        </div>
        <div className="for_info">
          <h1>{strMeal}</h1>
          <div className="details">
            <span>120 руб.</span>
            <h1>450г.</h1>
          </div>
        </div>
        <div className="delete_item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
