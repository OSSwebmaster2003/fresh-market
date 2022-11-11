import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function TimeDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="time_dropdown">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Время приготовления</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>10 - 15</DropdownItem>
          <DropdownItem>15-20</DropdownItem>
          <DropdownItem>25-40</DropdownItem>
          <DropdownItem>45-60</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default TimeDropdown;
