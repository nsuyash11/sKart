import React from "react";
import "./App.css";

import HomePage from "../src/pages/homepage/homepage.component";

import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import Checkout from "./pages/checkout/checkout.component.jsx";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions.js";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    console.log("Now mounting...    ", this.state);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /* createUserProfileDocument(userAuth, additionalData);
          creates user profile snapshot (document == record entry) in firestore database storage,
          with userRef as pointer to the db entry of that user */

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  //addition
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/shop" component={ShopPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninAndSignupPage />
              )
            }
          />

          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
/*
will dispatch
{
  setCurrentUser function returning : {
    type : ...,
    payload : ...
  }
}

Your mapDispatchToProps functions are expected to return an object. Each fields of the object should be a function, calling which is expected to dispatch an action to the store.
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
