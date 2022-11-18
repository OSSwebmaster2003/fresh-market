import React from "react";
import { useDispatch } from "react-redux";
import { DropdownItem } from "reactstrap";
import { categorizeItems } from "../../redux/action";

function CategoryItem({ strCategory, idCategory }) {
  const dispatch = useDispatch();
  // const { categorizedItems } = useSelector((state) => state);
  const handleCategorizedItems = (strCategory, idCategory) => {
    const newCategory = {
      idCategory,
      strCategory,
    };
    dispatch(categorizeItems(newCategory));
    console.log(newCategory);
  };
  return (
    <DropdownItem
      onClick={() => handleCategorizedItems(strCategory, idCategory)}
    >
      {strCategory}
    </DropdownItem>
  );
}

export default CategoryItem;
