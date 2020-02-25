import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.actions.js";
import { increaseQuantity } from "../../redux/cart/cart.actions.js";
import { decreaseQuantity } from "../../redux/cart/cart.actions.js";

const CheckoutItem = ({
  cartItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity
}) => {
  const { name, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => increaseQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  increaseQuantity: item => dispatch(increaseQuantity(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
