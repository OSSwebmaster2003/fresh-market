import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer(props) {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="brand">
          <Link to="/">
            <img src="./assets/footer_logo.png" alt="" />
          </Link>
          <div className="for_info">
            <p>© 2001–{new Date().getFullYear()} ООО «Лайм» </p>
            <h2>
              Все права защищены. «Лайм» является зарегистрированным товарным
              знаком Lime Holding SA.
            </h2>
            <Link href="/">Политика Конфиденциальности</Link>
          </div>
        </div>
        <div className="about_company">
          <h1>О компании</h1>
          <ul>
            <li>
              <Link to="/delivery">Доставка и оплата</Link>
            </li>
            <li>
              <Link to="/chatting">Вопрос-ответ Поставщикам</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/politics">Политика</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          <h1>Покупателям</h1>
          <ul>
            <li>
              <a href="!">Бонусная система</a>
            </li>
            <li>
              <a href="!">Как вернуть</a>
            </li>
            <li>
              <a href="!">Как заказать</a>
            </li>
            <li>
              <a href="!">Программа лояльности</a>
            </li>
            <li>
              <a href="!">Акции</a>
            </li>
            <li>
              <Link href="/chief_lime">Шеф-лайм</Link>
            </li>
          </ul>
        </div>
        <div className="support">
          <div className="support_calls">
            <h1>Круглосуточная поддержка</h1>
            <div className="call_center">
              <img src="./assets/call_center.png" alt="" />
              <h1>7756</h1>
            </div>
          </div>
          <div className="applications">
            <button>
              <img src="./assets/appstore.png" alt="" />
              Скачать в AppStore
            </button>
            <button>
              <img src="./assets/playmarket.png" alt="" />
              Скачать в Play Market
            </button>
          </div>
          <div className="social_media_pages">
            <a href="">
              <img src="./assets/facebook_footer.png" alt="" />
            </a>
            <a href="">
              <img src="./assets/youtube_footer.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
