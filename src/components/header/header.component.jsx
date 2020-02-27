import React from "react";

//import "./header.styles.scss";
import {
  HeaderContainerDiv,
  LogoContainerLink,
  OptionsContainerDiv,
  OptionContainerDiv,
  OptionContainerLink
} from "./header.styles.jsx";

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
    <HeaderContainerDiv>
      <LogoContainerLink to="/">
        <Logo className="logo" />
      </LogoContainerLink>
      <OptionsContainerDiv>
        <OptionContainerLink to="/shop">SHOP</OptionContainerLink>
        <OptionContainerLink to="/contact">CONTACT</OptionContainerLink>

        {currentUser ? (
          <OptionContainerDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionContainerDiv>
        ) : (
          <OptionContainerLink to="/signin">SIGN IN</OptionContainerLink>
        )}

        {currentUser ? (
          <OptionContainerDiv>
            <CartIcon />
          </OptionContainerDiv>
        ) : null}
      </OptionsContainerDiv>
      {hidden ? null : <CartDropDown />}
    </HeaderContainerDiv>
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
