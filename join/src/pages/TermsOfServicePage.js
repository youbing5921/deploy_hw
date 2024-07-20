import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import BottonBtn from "../components/BottonBtn";
import BackBtn from "../components/BackBtn";
import Checkbox from "../components/Checkbox";

const tos = [
  { id: 0, text: "약관에 모두 동의", required: false, detail: null },
  { id: 1, text: "(필수) 만 14세 이상입니다", required: true, detail: null },
  {
    id: 2,
    text: "(필수) 이용약관",
    required: true,
    detail: "이용약관에 대한 내용",
  },
  {
    id: 3,
    text: "(필수) 개인정보 수집 및 이용동의",
    required: true,
    detail: "개인정보 수집 및 이용동의에 대한 내용",
  },
  {
    id: 4,
    text: "(필수) 김과외 표준규정",
    required: true,
    detail: "김과외 표준규정에 대한 내용",
  },
  {
    id: 5,
    text: "(선택) 마케팅 정보 수신동의",
    required: false,
    detail: "마케팅 정보 수신동의에 대한 내용",
  },
];

const TermsOfServicePage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    const inputRequired = Array.prototype.slice.call(
      document.querySelectorAll(".required")
    );
    if (
      inputRequired.every((elt) => {
        return elt.checked;
      })
    ) {
      navigate("/join/info");
    } else {
      alert("필수 약관을 모두 동의해주시기 바랍니다.");
    }
  };

  return (
    <MainContainer>
      <BackBtn />
      <TosOval>이용약관 동의</TosOval>
      <TitleText>새로운 계정을 만들어볼까요?</TitleText>
      <SideText>이용약관에 동의해주세요.</SideText>
      {tos.map((element) => {
        return <Checkbox element={element} key={element.id} />;
      })}
      <NotiText>
        개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
        <br />
        동의 거부 시 회원가입이 제한됩니다.
      </NotiText>
      <NewBottonBtn onClick={onClick}>다음</NewBottonBtn>
    </MainContainer>
  );
};

export default TermsOfServicePage;

const TosOval = styled.p`
  display: inline-flex;
  width: 109px;
  height: 24px;
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 63px 0 0 0;

  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Pretendard";
  background-color: rgba(73, 73, 73, 0.2);
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
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 9px;
  padding-bottom: 63px;
`;

const NotiText = styled.div`
  color: #a4a4a4;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: auto 0 22px 0;
`;

const NewBottonBtn = styled(BottonBtn)`
  margin: 0 auto 56px auto;
`;
