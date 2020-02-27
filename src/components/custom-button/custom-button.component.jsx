import React from "react";

import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles.jsx";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
// className={`${
//   isGoogleButton ? "google-button" : isGithubButton ? "github-button" : ""
// } custom-button ${inverted ? "inverted" : ""}`}
