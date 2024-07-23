import React from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import BackBtn from "../components/BackBtn";
import BottonBtn from "../components/BottonBtn";
import { useLocation, useNavigate } from "react-router-dom";

const JoinComplete = () => {
  const location = useLocation();
  const role = location.state.role;
  console.log(role);
  const navigate = useNavigate();

  return (
    <>
      {role === "menti" ? (
        <MainContainer>
          <BackBtn onClick={() => navigate("/login")} />
          <ContentStyle>
            <p>
              환영합니다!
              <br />
              회원가입이 완료되었습니다.
            </p>
            <p>
              지금 로그인하고
              <br />
              오직 김이지님을 위한
              <br />
              든든한 멘토님을 만나보세요!
            </p>
          </ContentStyle>
          <NewBottonBtn onClick={() => navigate("/login")}>
            로그인하기
          </NewBottonBtn>
        </MainContainer>
      ) : (
        <MainContainer>
          <BackBtn onClick={() => navigate("/login")} />
          <ContentStyle>
            <p>
              환영합니다!
              <br />
              회원가입이 완료되었습니다.
            </p>
            <p>
              지금 로그인하고
              <br />
              애타게 김이지님을 찾고있는
              <br />
              멘티를 도와주세요!
            </p>
          </ContentStyle>
          <NewBottonBtn onClick={() => navigate("/login")}>
            로그인하기
          </NewBottonBtn>
        </MainContainer>
      )}
    </>
  );
};

export default JoinComplete;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 94px;

  p {
    color: #494949;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
  }
`;

const NewBottonBtn = styled(BottonBtn)`
  margin: auto auto 56px auto;
  &:hover {
    background-color: #494949;
  }
`;
