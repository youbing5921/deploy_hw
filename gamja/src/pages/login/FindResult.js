import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import MainContainer from "../../components/login/MainContainer";
import BottonBtn from "../../components/login/BottonBtn";
import LogoImage from "../../components/login/LogoImage";
import InputStyle from "../../components/login/InputStyle";

const FindResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = location.pathname;
  const state = location.state;
  const path = "/login/findId/result";

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <MainContainer>
      <FindContainer>
        <NewLogoImage />
        {prevPath === path ? (
          <>
            {/* 아이디 찾기 */}
            <NotiText>
              <p>가입하셨던 아이디는 아래와 같습니다.</p>
            </NotiText>
            <NewInputStyle
              value={state.username}
              readOnly
              onClick={() => {
                handleCopyClipBoard(state.username);
              }}
            />
            <FindBottonBtn onClick={() => navigate("/login")}>
              로그인하기
            </FindBottonBtn>
          </>
        ) : (
          <>
            {/* 비밀번호 찾기 */}
            <NotiText>
              <p>비밀번호가 초기화되었습니다.</p>
              <p>새 비밀번호는 아래와 같습니다.</p>
            </NotiText>
            <NewInputStyle
              value={state.password}
              readOnly
              onClick={() => {
                handleCopyClipBoard(state.username);
              }}
            />
            <FindBottonBtn onClick={() => navigate("/login")}>
              로그인하기
            </FindBottonBtn>
          </>
        )}
      </FindContainer>
    </MainContainer>
  );
};

export default FindResult;

const FindContainer = styled.div`
  display: flex;
  width: 479px;
  height: 720px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
`;

const NewLogoImage = styled(LogoImage)`
  width: 152px;
  height: 152px;
  margin-top: 51px;
  margin-bottom: 78px;
`;

const NotiText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
  p {
    margin: 0px;
    color: #494949;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const NewInputStyle = styled(InputStyle)`
  width: 326px;
  height: 19px;
  font-size: 15px;
  color: #494949;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;

const FindBottonBtn = styled(BottonBtn)`
  margin-top: auto;
  margin-bottom: 57px;
  width: 386px;
  height: 64px;
  border-radius: 10px;
  background-color: #494949;
  font-size: 25px;
`;
