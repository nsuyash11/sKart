export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  //will set it to first found matched item out of cartItems array otherwise undefined

  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
  //this appends (quantity property in the itemToAdd object) whole which is appended to the cartItems array
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  // cartItems.splice(cartItems.indexOf(itemToRemove), 1);
  // return cartItems;
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
};

export const increaseQuantityOfItem = (cartItems, itemToIncrease) => {
  return cartItems.map(cartItem =>
    cartItem.id === itemToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decreaseQuantityOfItem = (cartItems, itemToDecrease) => {
  let cartItemsUpdated = cartItems.map(cartItem =>
    cartItem.id === itemToDecrease.id
      ? cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : null
      : cartItem
  );

  return cartItemsUpdated.filter(cartItem => cartItem != null);
};
