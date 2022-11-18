import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavourites } from "../../redux/action";

function MainProductItem({ strMeal, strMealThumb, idMeal }) {
  // const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const { cart, favourites } = useSelector((state) => state);

  const handleAddCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.idMeal === product.idMeal);
    const addItem = () => {
      if (itemIndex < 0) {
        const newItem = {
          ...product,
          price: 120,
          quantity: 1,
        };
        return [...cart, newItem];
      } else {
        const newCart = cart.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              price: 120,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        return newCart;
      }
    };
    dispatch(addToCart(addItem()));
  };

  const addItemLiked = (product) => {
    const itemIndex = favourites.findIndex(
      (item) => item.idMeal === product.idMeal
    );
    const addProduct = () => {
      if (itemIndex < 0) {
        const newItem = {
          ...product,
          favourite: true,
        };
        return [...favourites, newItem];
      } else {
        const newFavourites = favourites.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              favourite: !item.favourite,
            };
          } else {
            return item;
          }
        });
        return newFavourites;
      }
    };
    dispatch(addToFavourites(addProduct()));
    // setLiked(!liked);
    console.log(favourites);
  };
  return (
    <>
      <div className="for_image">
        <Link to={`/mainProducts/fullList/${idMeal}`}>
          <img src={strMealThumb} alt="strThumb" />
        </Link>
        <div
          className="for_favourites"
          onClick={() => addItemLiked({ idMeal, strMeal, strMealThumb })}
        >
          <span>Add To Favourites</span>
        </div>
      </div>
      <div className="for_info">
        <Link to={`/mainProducts/fullList/${idMeal}`}>{strMeal}</Link>
      </div>
      <div
        className="ingredients"
        onClick={() => handleAddCart({ idMeal, strMeal, strMealThumb })}
      >
        Купить ингредиенты
      </div>
    </>
  );
}

export default MainProductItem;
