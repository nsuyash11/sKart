import styled, { css } from "styled-components";

const CommonButtonStyles = css`
  min-width: 180px;
  max-width: 250px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 10px 0 10px;
  font-size: 15px;
  background-color: rgb(250, 250, 239);
  color: black;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(21, 31, 51, 0.3);
  display: flex;
  justify-content: center;

  &:hover {
    background-color: rgb(230, 230, 220);
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: black;
  color: rgb(250, 250, 239);

  &:hover {
    background-color: rgb(250, 250, 239);
    color: black;
  }
`;

const googleSignInButtonStyles = css`
  background: linear-gradient(45deg, #4285f4 30%, #357ae8 90%);
  border-radius: 3px;
  color: "white";
  height: 48;
  padding: "0 30px";
  box-shadow: 0 3px 5px 2px rgba(105, 153, 255, 0.3);

  &:hover {
    background: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;

const githubButtonStyles = css`
  background: black;
  border-radius: 3px;
  color: white;
  height: 48;
  padding: "0 30px";
  box-shadow: 0 3px 5px 2px rgba(105, 153, 255, 0.3);

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;

const specificButtonStyles = props => {
  if (props.isGoogleButton) return googleSignInButtonStyles;
  else if (props.isGithubButton) return githubButtonStyles;

  return props.inverted ? invertedButtonStyles : CommonButtonStyles;
};

export const CustomButtonContainer = styled.button`
  ${CommonButtonStyles}
  ${specificButtonStyles}
`;
