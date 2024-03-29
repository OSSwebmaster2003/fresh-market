import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.scss";
import CartItem from "./CartItem";

function Cart({
  title,
  text,
  price,
  delivery,
  deliveryPrice,
  allPrice,
  allCost,
}) {
  const { cart } = useSelector((state) => state);

  const handleTotalPrice = () => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price * cart[i].quantity;
    }
    return total;
  };

  return (
    <div className="cart_section">
      <div className="cart_top">
        <div className="heading">
          <h1>{title}</h1>
          <p>
            {text} <span>{price}</span>
          </p>
          <p>
            {delivery} <span>{deliveryPrice}</span>
          </p>
          <p>
            {allPrice} <span>{allCost}</span>
          </p>
        </div>
        {cart &&
          cart.map(({ idMeal, ...props }) => {
            return <CartItem key={idMeal} {...props} idMeal={idMeal} />;
          })}
      </div>
      <div className="cart_bottom">
        <div className="total_price">
          <h1>Итого,руб:</h1>
          <span>{handleTotalPrice()}</span>
        </div>
        <Link className="order_products" to="/cart/checkout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-check-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg>
          <div className="product_amount">{cart.length}</div>
          <span>Подтвердить заказ</span>
        </Link>
        <Link to="/" className="back_to_home">
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
