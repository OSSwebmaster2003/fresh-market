import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RANDOM_MEAL } from "../../config";
import { fetchBanner } from "../../redux/action";

function Banner(props) {
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state);
  useEffect(() => {
    fetch(RANDOM_MEAL)
      .then((res) => res.json())
      .then((data) => dispatch(fetchBanner(data.meals)))
      .catch((err) => console.log(err));

    //eslint-disable-next-line
  }, []);
  return (
    <div className="banner">
      {banner &&
        banner.map((banner) => (
          <div className="banner_wrapper" key={banner.idMeal}>
            <div className="for_image">
              <img src={banner.strMealThumb} alt="" />
            </div>
            <div className="for_info">
              <h1>{banner.strMeal}</h1>
              <span>{banner.strCategory}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
