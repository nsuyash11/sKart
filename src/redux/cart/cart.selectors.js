import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cval) => acc + cval.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, cval) => acc + cval.quantity * cval.price, 0)
);
