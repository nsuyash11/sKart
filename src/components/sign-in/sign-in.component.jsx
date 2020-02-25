import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component";

import {
  signInWithGoogle,
  signInWithGithub
} from "../../firebase/firebase.utils.js";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; //will dynamically change that state var to current-typed value onChange, as textbox val comes from state var... LOL

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" }, () => {
        console.log("from sign in... ", this.state);
      });
    } catch (error) {
      alert(error.message);
      console.error(error.message);
    }
  }; //will clear out state vars & eventually textbox when clicking submit

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleButton>
              SIGN IN WITH GOOGLE
            </CustomButton>

            <CustomButton onClick={signInWithGithub} isGithubButton>
              SIGN IN WITH GITHUB
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
