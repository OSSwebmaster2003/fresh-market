import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function ProductDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="product_dropdown">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Продукты</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Seafood</DropdownItem>
          <DropdownItem>Salads</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default ProductDropdown;
