import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";

const TopBar = ({ txt, marginLeft }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <BackBtn onClick={() => navigate("/home")} />
        <Title marginLeft={marginLeft}>{txt}</Title>
      </Header>
    </>
  );
};

export default TopBar;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 35px;
`;
const Title = styled.div`
  color: #494949;
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  margin-left: ${(props) => props.marginLeft || "165px"};
`;
