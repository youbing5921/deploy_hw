import React from "react";
import styled from "styled-components";

const BackBtnStyle = styled.img.attrs({
  src: "/img/backBtn.svg",
})`
  width: 45px;
  height: 45px;
  margin: 23px 0px 23px 0px;
  cursor: pointer;
`;

const BackBtn = () => {
  return <BackBtnStyle />;
};

export default BackBtn;
