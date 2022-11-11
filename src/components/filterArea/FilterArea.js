import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import FilterItem from "./FilterItem";

function FilterArea(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const area = [
    {
      id: 1,
      area: "Russian",
    },
    {
      id: 2,
      area: "Canadian",
    },
    {
      id: 3,
      area: "American",
    },
    {
      id: 4,
      area: "Italian",
    },
    {
      id: 5,
      area: "Mexican",
    },
  ];
  console.log(area);
  return (
    <div className="filter_area">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Кухня</DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem header>Header</DropdownItem> */}
          {area.map(({ id, ...props }) => (
            <FilterItem key={id} {...props} />
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default FilterArea;
