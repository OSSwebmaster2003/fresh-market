import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCartItem } from "../../redux/action";

function CartItem({ strMeal, strMealThumb, quantity, idMeal, price }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.idMeal === product.idMeal);

    const newCart = cart.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });

    dispatch(addToCart(newCart));
  };
  const removeFromCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.idMeal === product.idMeal);
    // console.log(product);
    if (product.quantity > 1) {
      const newCart = cart.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });

      dispatch(addToCart(newCart));
    } else {
      deleteProduct(cart);
    }
  };

  function deleteProduct(item) {
    dispatch(deleteCartItem(cart.filter((item) => item.idMeal !== idMeal)));
  }
  return (
    <div className="cart_top_item">
      <div className="card">
        <Link to={`/mainProducts/fullList/${idMeal}`} className="for_image">
          <img src={strMealThumb} alt="" />
        </Link>
        <div className="for_count">
          <div className="increment" onClick={() => addItemToCart({ idMeal })}>
            +
          </div>
          <div className="amount">{quantity}</div>
          <div
            className="decrement"
            onClick={() => removeFromCart({ idMeal, quantity })}
          >
            -
          </div>
        </div>
        <div className="for_info">
          <Link to={`/mainProducts/fullList/${idMeal}`}>
            <h1>{strMeal}</h1>
          </Link>
          <div className="details">
            <span>{price * quantity} руб.</span>
            <h1>450г.</h1>
          </div>
        </div>
        <div className="delete_item" onClick={() => deleteProduct(cart)}>
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
