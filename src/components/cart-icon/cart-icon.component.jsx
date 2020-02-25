import React from "react";

import "./cart-icon.styles.scss";

import { connect } from "react-redux";

import { toggleCartVisibility } from "../../redux/cart/cart.actions.js";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartVisibility, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
