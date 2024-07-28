import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MainContainer from "../../components/categoryAndMatching/MainContainer";
import BackBtn from "../../components/categoryAndMatching/BackBtn";
import TitleOval from "../../components/categoryAndMatching/TitleOval";
import BottonBtn from "../../components/categoryAndMatching/BottonBtn";

const Matching = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <BackBtn />
      <NewTitleOval>멘토 매칭</NewTitleOval>
      <TitleText>
        이지님이 찾던
        <br />
        멘토님을 소개해드릴게요.
      </TitleText>
      <MentorDiv>
        <MentorContainer></MentorContainer>
      </MentorDiv>
      <BtnDiv>
        <NewBottonBtn
          onClick={() => {
            alert("관심멘토로 설정되었습니다.");
          }}
        >
          관심멘토로 설정하기
        </NewBottonBtn>
        <NewBottonBtn1
          onClick={() => {
            console.log("멘토님께 채팅하기");
          }}
        >
          멘토님께 채팅하기
        </NewBottonBtn1>
      </BtnDiv>
      <HorizonLine text="홈으로 이동하기" onClick={() => navigate("/home")} />
    </MainContainer>
  );
};

export default Matching;

const NewTitleOval = styled(TitleOval)`
  background-color: #7f7f7f;
`;

const TitleText = styled.div`
  color: #494949;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 30px;
`;

const BtnDiv = styled.div`
  display: flex;
  gap: 24px;
`;

const MentorDiv = styled.div`
  display: flex;
  gap: 27px;
  justify-content: center;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 98px;
`;

const MentorContainer = styled.div`
  width: 394px;
  height: 570px;
  border-radius: 20px;
  background: linear-gradient(200deg, #fff8dd 0.49%, #fdde55 99.51%);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
`;

const NewBottonBtn = styled(BottonBtn)`
  background: #7f7f7f;
  width: 248px;
  font-size: 23px;
  padding: 0px;
`;

const NewBottonBtn1 = styled(NewBottonBtn)`
  background-color: #494949;
`;

const HorizonLine = ({ text, bold, onClick }) => {
  return (
    <div
      style={{
        width: "474px",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "36px auto 53px auto",
        color: "#494949",
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
