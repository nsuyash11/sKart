import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  inverted,
  isGoogleButton,
  isGithubButton,
  ...otherProps
}) => {
  return (
    <button
      className={`${
        isGoogleButton ? "google-button" : isGithubButton ? "github-button" : ""
      } custom-button ${inverted ? "inverted" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
