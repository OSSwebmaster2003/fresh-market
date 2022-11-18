import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { LOOK_DETAILS } from "../../config";
import {
  categorizeItems,
  filterByArea,
  lookUpDetails,
} from "../../redux/action";
import "./ProductDetails.scss";

function ProductDetails(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, area } = useSelector((state) => state);

  const handleCategorizedItems = (strCategory, idCategory) => {
    const newCategory = {
      idCategory,
      strCategory,
    };
    dispatch(categorizeItems(newCategory));
  };

  useEffect(() => {
    fetch(LOOK_DETAILS + id)
      .then((res) => res.json())
      .then((data) => dispatch(lookUpDetails(data.meals)));

    //eslint-disable-next-line
  }, [id]);

  return (
    <div className="product_details">
      <div className="details_wrapper">
        {singleProduct &&
          singleProduct.map((item) => (
            <div className="card" key={item.idMeal}>
              <div className="for_image">
                <img src={item.strMealThumb} alt="" />
              </div>
              <div className="for_info">
                <div className="main_info">
                  <h1>{item.strMeal}</h1>
                  <Link
                    to="/mainProducts/fullList"
                    onClick={() =>
                      handleCategorizedItems(item.strCategory, item.idCategory)
                    }
                  >
                    {item.strCategory}
                  </Link>
                  <Link
                    to={`/mainProducts/area/${item.strArea}`}
                    className="area"
                  >
                    {item.strArea}
                  </Link>
                </div>
                <div className="instructions">
                  <p>{item.strInstructions}</p>
                </div>
                <div className="watch_on_youtube">
                  <a href={item.strYoutube}>Watch on You Tube</a>
                  <Link to="/">Home</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductDetails;
