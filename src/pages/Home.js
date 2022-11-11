import React from "react";
import Cart from "../common/cart/Cart";
import Banner from "../components/banner/Banner";
import Categories from "../components/category/Categories";
import FilterArea from "../components/filterArea/FilterArea";
import MainProducts from "../components/mainProducts/MainProducts";
import ProductDropdown from "../components/products/ProductDropdown";
import TimeDropdown from "../components/timeDropdown/TimeDropdown";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="main_part">
        <div className="filters">
          <Categories />
          <FilterArea />
          <TimeDropdown />
          <ProductDropdown />
        </div>
        <Banner />
        <MainProducts />
      </div>
      <div className="cart_part">
        <Cart />
      </div>
    </div>
  );
}

export default Home;
