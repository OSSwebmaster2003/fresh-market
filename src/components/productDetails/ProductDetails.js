import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { LOOK_DETAILS } from "../../config";
import { lookUpDetails } from "../../redux/action";
import "./ProductDetails.scss";

function ProductDetails(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state);
  useEffect(() => {
    fetch(LOOK_DETAILS + id)
      .then((res) => res.json())
      .then((data) => dispatch(lookUpDetails(data.meals)));
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
                  <span>{item.strCategory}</span>
                  <span className="area">{item.strArea}</span>
                </div>
                <div className="instructions">
                  <p>{item.strInstructions}</p>
                </div>
                <div className="watch_on_youtube">
                  <a href={item.strYoutube}>Watch on You Tube</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductDetails;
