import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProductDetails from "../components/productDetails/ProductDetails";
import { Link } from "react-router-dom";
import { deleteFavItem } from "../redux/action";
import "../styles/favourites.scss";

function Favourites(props) {
  const { favourites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteFavourite = (product) => {
    dispatch(
      deleteFavItem(favourites.filter((item) => item.idMeal !== product.idMeal))
    );
  };

  return (
    <div className="favourites_page">
      <div className="favourites_wrapper">
        {favourites &&
          favourites.map(({ idMeal, strMealThumb, strMeal }) => (
            <div className="card" key={idMeal}>
              <Link
                className="for_image"
                to={`/mainProducts/fullList/${idMeal}`}
              >
                <img src={strMealThumb} alt="" />
              </Link>
              <Link
                className="for_info"
                to={`/mainProducts/fullList/${idMeal}`}
              >
                <h1>{strMeal}</h1>
              </Link>
              <div
                className="delete_liked"
                onClick={() => deleteFavourite({ idMeal })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </div>
            </div>
          ))}
        <Link to="/" className="back_to_home">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Favourites;
