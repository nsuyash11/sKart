import React from "react";

import "./header.styles.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}

        {currentUser ? (
          <div className="option">
            <CartIcon />
          </div>
        ) : null}
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
/*
see in rootReducer return object
Used when you want some state property as prop for your current component.
Format is like :- 
const mapStateToProps = (state) => {
  prop1 : state.property1,
  prop2 : state.property2
}

state -
If your mapStateToProps function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter.
Can use destructured element of state also like used here above in code eg state.user.currentUser and state.cart.hidden as ({ user: { currentUser }, cart: { hidden } }) from (state)
*/

export default connect(mapStateToProps)(Header);
/*
mapStateToProps functions are expected to return an object. This object, normally referred to as stateProps, stateProps, will be merged as props to your connected component
*/
