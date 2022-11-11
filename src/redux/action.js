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
