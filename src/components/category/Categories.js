import React, { useEffect, useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES } from "../../config";
import CategoryItem from "./CategoryItem";
import { fetchCategories } from "../../redux/action";

function Categories(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    fetch(CATEGORIES)
      .then((res) => res.json())
      .then((data) => dispatch(fetchCategories(data.categories)));
    //eslint-disable-next-line
  }, []);
  return (
    <div className="category">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Категория</DropdownToggle>
        <DropdownMenu>
          {categories &&
            categories.map(({ idCategory, ...props }) => (
              <CategoryItem
                key={idCategory}
                {...props}
                idCategory={idCategory}
              />
            ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Categories;
