import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MainContainer from "../../components/categoryAndMatching/MainContainer";
import BackBtn from "../../components/categoryAndMatching/BackBtn";
import TitleOval from "../../components/categoryAndMatching/TitleOval";
import BottonBtn from "../../components/categoryAndMatching/BottonBtn";
import axios from "axios";

const Category = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const onClick = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      e.target.id = "";
      setCategory(category.filter((elt) => elt != value));
    } else {
      if (location === "/category/mentor" && category.length < 3) {
        e.target.id = "category_mentor_clicked";
        setCategory((prev) => [...prev, value]);
      } else if (location === "/category/mentee") {
        e.target.id = "category_mentee_clicked";
        setCategory((prev) => [...prev, value]);
      }
    }
  };

  useEffect(() => {
    const titleOval = document.querySelector(".titleOval");
    const bottomBtn = document.querySelector(".bottomBtn");
    if (category.length) {
      titleOval.style.backgroundColor = "#7f7f7f";
      bottomBtn.style.backgroundColor = "#494949";
      setDisabled(false);
    } else {
      titleOval.style.backgroundColor = "rgba(73, 73, 73, 0.2)";
      bottomBtn.style.backgroundColor = "#dbdbdb";
      setDisabled(true);
    }
  }, [category]);

  if (location === "/category/mentor") {
    return (
      <MainContainer>
        <NewBackBtn onClick={() => navigate(-1)} />
        <TitleOval className="titleOval">전문 분야 설정</TitleOval>
        <TitleText>
          {localStorage.getItem("name").substring(1)}님은 멘티에게
          <br />
          어떤 이야기를 들려주실 건가요?
        </TitleText>
        <SideText>멘토님만의 전문 멘토링 분야를 최대 3개 정해주세요</SideText>
        <ButtonDiv>
          <button onClick={onClick} value="가치관">
            가치관
          </button>
          <button onClick={onClick} value="재테크">
            돈・재테크
          </button>
          <button onClick={onClick} value="사랑">
            사랑
          </button>
        </ButtonDiv>
        <ButtonDiv>
          <button onClick={onClick} value="생활지식">
            생활 지식
          </button>
          <button onClick={onClick} value="인간관계">
            인간 관계
          </button>
          <button onClick={onClick} value="진로">
            진로
          </button>
        </ButtonDiv>
        <NewBottonBtn
          className="bottomBtn"
          disabled={disabled}
          oonClick={() =>
            navigate("/matching", { state: { category: category } })
          }
        >
          고민 중인 멘티 돕기
        </NewBottonBtn>
        <HorizonLine text="홈으로 이동하기" onClick={() => navigate("/home")} />
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <NewBackBtn onClick={() => navigate(-1)} />
        <TitleOval className="titleOval">고민 설정</TitleOval>
        <TitleText>
          {localStorage.getItem("name").substring(1)}님은
          <br />
          어떤 고민을 가지고 계신가요?
        </TitleText>
        <SideText></SideText>
        <ButtonDiv>
          <button onClick={onClick} value="가치관">
            가치관
          </button>
          <button onClick={onClick} value="재테크">
            돈・재테크
          </button>
          <button onClick={onClick} value="사랑">
            사랑
          </button>
        </ButtonDiv>
        <ButtonDiv>
          <button onClick={onClick} value="생활지식">
            생활 지식
          </button>
          <button onClick={onClick} value="인간관계">
            인간 관계
          </button>
          <button onClick={onClick} value="진로">
            진로
          </button>
        </ButtonDiv>
        <NewBottonBtn
          className="bottomBtn"
          disabled={disabled}
          onClick={() => {
            navigate("/matching", { state: { category: category } });
          }}
        >
          나에게 딱 맞는 멘토 찾기
        </NewBottonBtn>
        <HorizonLine text="홈으로 이동하기" onClick={() => navigate("/home")} />
      </MainContainer>
    );
  }
};

export default Category;

const NewBackBtn = styled(BackBtn)`
  margin-right: auto;
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

const SideText = styled.div`
  color: #7f7f7f;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 9px;
  padding-bottom: 63px;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  height: 55px;
  margin-bottom: 25px;
  button {
    appearance: none;
    border: 0px;
    padding: 0px 25px;
    border-radius: 30px;
    border: 1px solid rgba(73, 73, 73, 0.2);
    background: rgba(73, 73, 73, 0.1);
    color: #7f7f7f;
    text-align: center;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
        margin: "28px auto 53px auto",
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

const NewBottonBtn = styled(BottonBtn)`
  margin-top: auto;
`;
