import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors.js";

import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL : ₹ {cartTotal}</span>
      </div>

      <StripeCheckout price={cartTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
//will be used to powerup the connected component Checkout with props borrowed from the redux store state as per written in the mapStateToProps function
