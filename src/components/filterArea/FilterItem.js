import React from "react";
import { DropdownItem } from "reactstrap";

function FilterItem({ area }) {
  return <DropdownItem>{area}</DropdownItem>;
}

export default FilterItem;
