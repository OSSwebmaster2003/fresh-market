import React from "react";
import LowHeader from "./lowHeader/LowHeader";
import TopHeader from "./topHeader/TopHeader";

function Header(props) {
  return (
    <div className="header">
      <TopHeader />
      <div className="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <LowHeader />
    </div>
  );
}

export default Header;
