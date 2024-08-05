import React from "react";
import styled from "styled-components";
import MainContainer from "../../components/join/MainContainer";
import TitleOval from "../../components/join/TitleOval";
import BackBtn from "../../components/join/BackBtn";
import { useLocation, useNavigate } from "react-router-dom";

const detail = [
  "이하는 법적 책임이 없는 단순 예시입니다.",
  "제1조 (목적)",
  "본 약관은 주식회사 청파동감자(이하 “회사”)가 회원에게 제공하는 서비스(‘보이지’ 서비스를 포함한 회사가 제공하는 모든 서비스를 의미하며, 해당 서비스를 총칭하여 “통합서비스” 또는 “서비스”라 함)의 이용과 관련하여 회사와 회원 간의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.",
  "제2조 (용어의 정의)",
  "본 약관에서 사용하는 용어의 정의는 다음과 같습니다.",
  "1. “서비스”라 함은 회사가 운영하는 모바일 애플리케이션 김과외 및 웹페이지 (https://www.kimstudy.com)등(이하 총칭하여 “앱 등”)을 통하여 제공하는 서비스 일체를 의미합니다.",
  "2. “회원”이라 함은 앱 등을 통하여 회원가입 절차를 완료한 자로서, 회사가 제공하는 서비스를 이용할 수 있는 자를 의미합니다.",
  "3. “학생회원”이라 함은 학습자 또는 학습자의 학부모로서, 선생님회원에게 학습자가 교습을 받 는 대가로 교습비를 지급하는 자를 의미합니다(또한 학생/학부모회원으로 가입하여 김과외 서비스를 이용하는 자를 포함합니다).",
  "4. “선생님회원”이라 함은 개인과외교습자로서, 학생회원에게 지식, 기술, 예능 등을 교습하고, 교습비를 지급받는 자를 의미합니다(또한 선생님회원으로 가입하여 김과외 서비스를 이용하 는 자를 포함합니다).",
  "5. “채팅”이라 함은 앱 등을 통하여 학생회원과 선생님회원이 개인과외교습 계약 체결 여부, 교 습 세부 사항에 대하여 실시간으로 문의, 답변하는 것을 의미합니다.",
  "제3조 (약관의 명시와 개정)",
  "① 회사는 본 약관의 내용을 회원이 알 수 있도록 앱 등에 게시하거나 연결화면을 제공하는 방법으로 회원에게 공지합니다. ② 회사는 「약관의 규제에 관한 법률」 등 관련 법령에 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.",
];

const title = [
  null,
  "이용약관",
  "개인정보 수집 및 이용동의",
  "보이지 표준규정",
  "마케팅 정보 수신동의",
];

const TermDetail = () => {
  const navigate = useNavigate();
  const id = useLocation().state.id;

  return (
    <MainContainer>
      <BackBtn onClick={() => navigate(-1)} />
      <NewTitleOval>{title[id - 1]}</NewTitleOval>
      <Div>
        <StyledP>
          <b>{detail[0]}</b>
        </StyledP>
        <br />
        <StyledP>{detail[1]}</StyledP>
        <StyledP>{detail[2]}</StyledP>
        <br />

        <StyledP>{detail[3]}</StyledP>
        <StyledP>{detail[4]}</StyledP>
        <StyledP>{detail[5]}</StyledP>
        <StyledP>{detail[6]}</StyledP>
        <StyledP>{detail[7]}</StyledP>
        <StyledP>{detail[8]}</StyledP>
        <StyledP>{detail[9]}</StyledP>
        <br />
        <StyledP>{detail[10]}</StyledP>
        <StyledP>{detail[11]}</StyledP>
      </Div>
    </MainContainer>
  );
};

export default TermDetail;

const NewTitleOval = styled(TitleOval)`
  background-color: rgba(73, 73, 73, 0.7);
  margin-bottom: 28px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
`;

const StyledP = styled.p`
  margin: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
