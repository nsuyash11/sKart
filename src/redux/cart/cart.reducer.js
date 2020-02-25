import CartActionTypes from "./cart.types.js";
import { addItemToCart } from "./cart.utils.js";
import { removeItemFromCart } from "./cart.utils.js";
import { increaseQuantityOfItem } from "./cart.utils.js";
import { decreaseQuantityOfItem } from "./cart.utils.js";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case CartActionTypes.INCREASE_QUANTITY_OF_ITEM:
      return {
        ...state,
        cartItems: increaseQuantityOfItem(state.cartItems, action.payload)
      };

    case CartActionTypes.DECREASE_QUANTITY_OF_ITEM:
      return {
        ...state,
        cartItems: decreaseQuantityOfItem(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};
/*
you can add various actions that will take place related to cart and change the cart property of the state because this cartReducer is mapped to cart property in root reducer.
Hence, actions that will change the state are written here
*/

export default cartReducer;
