import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MainContainer from "../../components/categoryAndMatching/MainContainer";
import BackBtn from "../../components/categoryAndMatching/BackBtn";
import TitleOval from "../../components/categoryAndMatching/TitleOval";
import BottonBtn from "../../components/categoryAndMatching/BottonBtn";
import MentorReco from "../../components/matching/MentorReco";

const infoList = [
  {
    id: "1",
    name: "가가가",
    category: ["가치관", "사랑", "생활"],
    count: [10, 10, 2],
    rating: 50,
  },
  {
    id: "2",
    name: "나나나",
    category: ["인간관계", "재테크", "가치관"],
    count: [3, 8, 1],
    rating: 65,
  },
  {
    id: "3",
    name: "다다다",
    category: ["인간관계", "재테크", "가치관"],
    count: [9, 23, 2],
    rating: 35,
  },
  {
    id: "4",
    name: "라라라",
    category: ["인간관계", "재테크", "진로"],
    count: [15, 10, 20],
    rating: 30,
  },
  {
    id: "5",
    name: "마마마",
    category: ["인간관계", "재테크", "사랑"],
    count: [15, 30, 20],
    rating: 96,
  },
];

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
      <MentorReco infoList={infoList}> </MentorReco>
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
