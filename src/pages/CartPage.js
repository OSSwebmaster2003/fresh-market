import React from "react";
import { useSelector } from "react-redux";
import Cart from "../common/cart/Cart";
import "../styles/cartPage.scss";

function CartPage(props) {
  const { cart } = useSelector((state) => state);
  return (
    <div className="cart_page">
      <Cart />
    </div>
  );
}

export default CartPage;
