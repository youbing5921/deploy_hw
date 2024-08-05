import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/join/MainContainer";
import BottonBtn from "../../components/join/BottonBtn";
import BackBtn from "../../components/join/BackBtn";
import Checkbox from "../../components/join/Checkbox";
import TitleOval from "../../components/join/TitleOval";

const tos = [
  { id: 1, text: "(필수) 만 14세 이상입니다", required: true },
  { id: 2, text: "(필수) 이용약관", required: true },
  { id: 3, text: "(필수) 개인정보 수집 및 이용동의", required: true },
  { id: 4, text: "(필수) 김과외 표준규정", required: true },
  { id: 5, text: "(선택) 마케팅 정보 수신동의", required: false },
];

const TermsOfServicePage = () => {
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onChange = () => {
    const inputRequired = Array.prototype.slice.call(
      document.querySelectorAll(".required")
    );
    const titleOval = document.querySelector(".titleOval");
    const newBottonBtn = document.querySelector(".newBottonBtn");
    if (
      inputRequired.every((elt) => {
        return elt.checked;
      })
    ) {
      titleOval.style.backgroundColor = "#7F7F7F";
      newBottonBtn.style.backgroundColor = "#494949";
      setBtnDisabled(false);
    } else {
      titleOval.style.backgroundColor = "rgba(73, 73, 73, 0.2)";
      newBottonBtn.style.backgroundColor = "#dbdbdb";
      setBtnDisabled(true);
    }
  };

  return (
    <MainContainer>
      <BackBtn onClick={() => navigate("/join")} />
      <TitleOval className="titleOval">이용약관 동의</TitleOval>
      <TitleText>새로운 계정을 만들어볼까요?</TitleText>
      <SideText>이용약관에 동의해주세요.</SideText>
      {tos.map((element) => {
        return (
          <Checkbox element={element} key={element.id} onChange={onChange} />
        );
      })}
      <NotiText>
        개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
        <br />
        동의 거부 시 회원가입이 제한됩니다.
      </NotiText>
      <NewBottonBtn
        className="newBottonBtn"
        disabled={btnDisabled}
        onClick={() => navigate("/join/info")}
      >
        다음
      </NewBottonBtn>
    </MainContainer>
  );
};

export default TermsOfServicePage;

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
