import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
//common css block to be reused

export const HeaderContainerDiv = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const LogoContainerLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainerDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionContainerDiv = styled.div`
  ${OptionStyles}
`;

export const OptionContainerLink = styled(Link)`
  ${OptionStyles}
`;
