import React from "react";
import Cart from "../common/cart/Cart";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "../styles/checkout.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout(props) {
  const { cart } = useSelector((state) => state);
  const deliveryCost = 20;
  const handleTotalPrice = () => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price * cart[i].quantity;
    }
    return total;
  };
  return (
    <div className="checkout_page">
      <div className="checkout_wrapper">
        <div className="main_part">
          <div className="heading">
            <h1>Информация биллинга</h1>
          </div>
          <div className="form_part">
            <form action="">
              <div className="form_wrapper">
                <div>
                  <div className="inner_div">
                    <label>Телефон *</label>
                    <input type="text" required />
                  </div>
                  <div className="inner_div">
                    <label>Ф.И.О *</label>
                    <input type="text" required />
                  </div>
                </div>
                <div>
                  <div className="inner_div">
                    <label>Область *</label>
                    <select required>
                      <option value="Buxara">Buxara</option>
                      <option value="Tashkent">Tashkent</option>
                      <option value="Samarkand">Samarkand</option>
                    </select>
                  </div>
                  <div className="inner_div">
                    <label>Город / Район *</label>
                    <select required>
                      <option value="Alat">Alat</option>
                      <option value="Karakul">Karakul</option>
                      <option value="Kogon">Kogon</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="inner2_div">
                    <label>Населённый пункт</label>
                    <select required>
                      <option value="Khidreyli">Khidreyli</option>
                      <option value="Buribek Chandir">Buribek Chandir</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="inner2_div">
                    <label>Адрес * | в деталях</label>
                    <input type="text" required />
                  </div>
                </div>
                <div>
                  <div className="inner2_div">
                    <label>Ваш рабочий адрес</label>
                    <input type="text" required />
                  </div>
                </div>
                <div>
                  <div className="inner2_div">
                    <label>Торговая заметка</label>
                    <input type="text" required />
                  </div>
                </div>
                <div>
                  <div className="inner_div">
                    <button
                      type="submit"
                      onClick={() =>
                        cart.length
                          ? alert("Our professionals will contact you soon!")
                          : alert("You didn't buy anything")
                      }
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="inner_div">
                    <Link to="/">Back To Home</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="cart_part">
          <Cart
            title={`В корзине ${cart.length} товара`}
            text="Цена товара"
            price={"$" + handleTotalPrice()}
            delivery=" Цена доставки "
            deliveryPrice={`$${deliveryCost}`}
            allPrice="Общая сумма:"
            allCost={"$" + (handleTotalPrice() + deliveryCost)}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
