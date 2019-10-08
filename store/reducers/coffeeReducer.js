import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: action.payload,
        loading: false
      };
    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default coffeeReducer;
