import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./topHeader.scss";

function TopHeader(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="top_header">
      <div className="basic_information">
        <div className="call_center">
          <img src="./assets/call_center.png" alt="call-center" />
          7756
        </div>
        <div className="markets_available">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              <img src="./assets/location.png" alt="location" />
              Магазины
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Yashnobod</DropdownItem>
              <DropdownItem>Yunusobod</DropdownItem>
              <DropdownItem>Mirobod</DropdownItem>
              <DropdownItem>Chilonzor</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="delivery">
          <img src="./assets/delivery.png" alt="" />
          Зона доставки
        </div>
        <div className="work_time">
          <img src="./assets/clock.png" alt="" />
          6:00 - 24:00
        </div>
      </div>
      <div className="user_inter">
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
      </div>
    </div>
  );
}

export default TopHeader;
