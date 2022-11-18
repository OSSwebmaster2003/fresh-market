const initialState = {
  categories: [],
  banner: [],
  categorizedItems: [
    {
      idCategory: "1",
      strCategory: "Beef",
    },
  ],
  area: [],
  filterByCategory: [],
  singleProduct: [],
  cart: [],
  favourites: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "FETCH_BANNER":
      return {
        ...state,
        banner: action.payload,
      };
    case "CATEGORIZED_ITEMS":
      return {
        ...state,
        categorizedItems: [action.payload],
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterByCategory: action.payload,
      };
    case "LOOK_UP_DETAILS":
      return {
        ...state,
        singleProduct: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };
    case "DELETE_CART_ITEM":
      return {
        ...state,
        quantity: 0,
        cart: action.payload,
      };
    case "DELETE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };
    case "FILTER_BY_AREA":
      return {
        ...state,
        area: action.payload,
      };
    default:
      return state;
  }
};
