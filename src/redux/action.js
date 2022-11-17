export const fetchCategories = (category) => ({
  type: "FETCH_CATEGORIES",
  payload: category,
});
export const fetchBanner = (product) => ({
  type: "FETCH_BANNER",
  payload: product,
});
export const categorizeItems = (category) => ({
  type: "CATEGORIZED_ITEMS",
  payload: category,
});
export const filterCategories = (categoryName) => ({
  type: "FILTER_BY_CATEGORY",
  payload: categoryName,
});
export const lookUpDetails = (product) => ({
  type: "LOOK_UP_DETAILS",
  payload: product,
});
export const addToCart = (cart) => ({
  type: "ADD_TO_CART",
  payload: cart,
});
export const deleteCartItem = (product) => ({
  type: "DELETE_CART_ITEM",
  payload: product,
});
export const increment = () => ({ type: "INCREMENT" });
export const addToFavourites = (product) => ({
  type: "ADD_TO_FAVOURITES",
  payload: product,
});
