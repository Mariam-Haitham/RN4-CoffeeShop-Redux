import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";
import { connect } from "react-redux";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Medium",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Small",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newItems = state.items;
      let index = newItems.findIndex(
        item =>
          item.drink === action.payload.drink &&
          item.option === action.payload.option
      );

      index !== -1
        ? (newItems[index].quantity += 1)
        : newItems.push({
            drink: action.payload.drink,
            option: action.payload.option,
            quantity: 1
          });
      return {
        ...state,
        items: [...newItems]
      };

    case REMOVE_ITEM:
      let newItems2 = state.items.filter(item => item !== action.payload);
      console.log("I AM HERE");
      console.log(newItems2);
      console.log("########");
      console.log(action.payload);
      return {
        ...state,
        items: [...newItems2]
      };
    case CHECKOUT:
      alert("Thank you for shopping with us!!");
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
