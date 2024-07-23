import React from "react";
import styled from "styled-components";
import BottonBtn from "../../components/join/BottonBtn";
import MainContainer from "../../components/join/MainContainer";
import BackBtn from "../../components/join/BackBtn";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <BackBtn />
      <HelloText>
        안녕하세요!
        <br />
        <span>보이지</span>에 오신 것을
        <br />
        환영합니다.
      </HelloText>
      <NewBottonBtn onClick={() => navigate("/join/tos")}>
        회원가입하기
      </NewBottonBtn>
      <HorizonLine
        text="이미 보이져에요! "
        bold="로그인하기"
        onClick={() => navigate("/login")}
      />
    </MainContainer>
  );
};

export default WelcomePage;

const HelloText = styled.p`
  color: #494949;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 94px;
  span {
    background: linear-gradient(to right, #03aed2, #fdde55);
    color: transparent;
    background-clip: text;
  }
`;

const HorizonLine = ({ text, bold, onClick }) => {
  return (
    <div
      style={{
        width: "474px",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px auto 45px auto",
        color: "#A4A4A4",
      }}
    >
      <span
        style={{
          background: "#f8f8f8",
          padding: "0 10px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {text}
        <b>{bold}</b>
      </span>
    </div>
  );
};

const NewBottonBtn = styled(BottonBtn)`
  background-color: #494949;
  margin: auto auto 31px auto;
`;
