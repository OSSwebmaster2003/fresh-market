import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./lowHeader.scss";

function LowHeader(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navModal, setNavModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleNavModal = () => setNavModal((prev) => !prev);
  const handleSearchModal = () => setSearchModal((prev) => !prev);
  return (
    <div className="low_header">
      {navModal && (
        <div className="nav_modal">
          <div className="close_modal" onClick={() => handleNavModal()}>
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
          <div className="modal_logo">
            <img src="./assets/logo.png" alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/chief_lime">Шеф-лайм</Link>
              </li>
              <li>
                <Link to="/vacancies">Вакансии</Link>
              </li>
              <li>
                <Link to="/chatting">Вопрос-ответ</Link>
              </li>
              <li>
                <Link to="/collaborators">Партнерам</Link>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.uznewmax.theflash&hl=ru&gl=US">
                  Бонусная программа
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div
        className="search_modal"
        id={searchModal ? "activate_search_modal" : ""}
      >
        <svg
          onClick={() => handleSearchModal()}
          id="closing_search_modal"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <div className="search_modal_wrapper">
          <input type="text" placeholder="search products" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="search_part">
        <button className="menu_modal">
          <svg
            onClick={() => handleNavModal()}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <button>
          <img src="./assets/search_catalog.png" alt="search" />
          Каталог
        </button>
        <div className="search_products_box">
          <input type="text" placeholder="Купить молоко" />
          <span>
            <img
              src="./assets/simple_search.png"
              alt=""
              onClick={() => handleSearchModal()}
            />
          </span>
        </div>
      </div>
      <div className="actions_part">
        <div className="discounts">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              <span>%</span> <h1>Скидки</h1>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>5%</DropdownItem>
              <DropdownItem>10%</DropdownItem>
              <DropdownItem>15%</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Link className="personal_profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <h1>Кабинет</h1>
        </Link>
        <Link to="/favourites" className="favourites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-suit-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
          </svg>
          <h1>Избранное</h1>
          <div className="amount">0</div>
        </Link>
        <Link to="/cart" className="cart">
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
          <h1>Корзина</h1>
          <div className="amount">0</div>
        </Link>
      </div>
    </div>
  );
}

export default LowHeader;
