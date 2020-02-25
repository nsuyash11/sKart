import React from "react";

import "./signin-and-signup.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

const SigninAndSignupPage = () => {
  return (
    <div>
      <div className="split left">
        <SignIn />
      </div>

      <div className="split right">
        <SignUp />
      </div>
    </div>
  );
};

export default SigninAndSignupPage;
