import React from "react";
import styled from "styled-components";

const LogoutWithdrawBtn = ({ text, onClick }) => {
  const src = text === "logout" ? "logout" : "memberWithdraw";
  return (
    <Icon src={`/img/${src}Btn.svg`} alt={`${src}Icon`} onClick={onClick} />
  );
};

export default LogoutWithdrawBtn;

const Icon = styled.img`
  width: 133px;
  height: 32px;
  cursor: pointer;
`;
