import React from "react";
import LowHeader from "./lowHeader/LowHeader";
import TopHeader from "./topHeader/TopHeader";
import logo from "../../assets/logo.png";

function Header(props) {
  return (
    <div className="header">
      <TopHeader />
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <LowHeader />
    </div>
  );
}

export default Header;
