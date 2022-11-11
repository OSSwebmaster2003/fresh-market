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
    default:
      return state;
  }
};
