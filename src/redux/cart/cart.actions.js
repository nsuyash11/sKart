import CartActionTypes from "./cart.types.js";

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const increaseQuantity = item => ({
  type: CartActionTypes.INCREASE_QUANTITY_OF_ITEM,
  payload: item
});

export const decreaseQuantity = item => ({
  type: CartActionTypes.DECREASE_QUANTITY_OF_ITEM,
  payload: item
});
