const initialState = {
  categories: [],
  banner: [],
  categorizedItems: [
    {
      idCategory: "1",
      strCategory: "Beef",
    },
  ],
  filterByCategory: [],
  singleProduct: [],
  cart: [],
  // quantity: 0,
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
        quantity: 1,
        cart: [...state.cart, action.payload],
      };
    // case "INCREASE_QUANTITY":
    //   return {
    //     ...state,
    //     quantity: state.quantity + 1,
    //   };
    // case "DECREASE_QUANTITY":
    //   return {
    //     ...state,
    //     quantity: state.quantity - 1,
    //   };
    default:
      return state;
  }
};
