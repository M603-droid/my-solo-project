import { initialState } from "../store";

const favoriteReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_FAVORITE":
      return {
        ...state,
        favorite_products: [...state.favorite_products, action.payload],
      };
    case "REMOVE_PRODUCT_FROM_FAVORITE":
      return {
        ...state,
        favorite_products: state.favorite_products.filter((favorite, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer
