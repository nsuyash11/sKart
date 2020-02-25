import React from "react";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component.jsx";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartVisibility } from "../../redux/cart/cart.actions.js";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems, history, dispatch, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
          <CustomButton
            onClick={() => {
              history.push("/checkout");
              dispatch(toggleCartVisibility());
            }}
          >
            Go to Checkout
          </CustomButton>
        </div>
      ) : (
        <div className="empty-message">
          <span> Your sKart is Empty </span>
        </div>
      )}
    </div>
  );
};

const matchStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(matchStateToProps)(CartDropDown));
