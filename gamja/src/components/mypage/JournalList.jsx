import React from "react";
import styled from "styled-components";

const JournalList = ({ txt, onBtnClick, fontColor, bgColor }) => {
  return (
    <>
      <Container>
        <Top>
          <Title>나의 멘토링 {txt}</Title>
          <WriteBtn
            onClick={onBtnClick}
            fontColor={fontColor}
            bgColor={bgColor}
          >
            일지쓰기
          </WriteBtn>
        </Top>
        <BoldHr />
        <ListBox>
          <Journal>
            <JournalTitle>사랑과 돈</JournalTitle>
            <WriteDate>2024.07.20</WriteDate>
          </Journal>
          <BasicHr />
          <Journal>
            <JournalTitle>인생을 값지게 사는 법</JournalTitle>
            <WriteDate>2024.06.02</WriteDate>
          </Journal>
          <BasicHr />
          <Journal>
            <JournalTitle>흰 빨래 잘 하는 팁</JournalTitle>
            <WriteDate>2024.06.01</WriteDate>
          </Journal>
          <BasicHr />
          <Journal>
            <JournalTitle>도전과 실패</JournalTitle>
            <WriteDate>2024.05.21</WriteDate>
          </Journal>
          <BasicHr />
          <Journal>
            <JournalTitle>짝사랑의 가치</JournalTitle>
            <WriteDate>2024.04.20</WriteDate>
          </Journal>
          <BasicHr />
        </ListBox>
      </Container>
    </>
  );
};

export default JournalList;

const Container = styled.div`
  padding: 0px 40px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0px;
`;

const Title = styled.div`
  color: #494949;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const WriteBtn = styled.button`
  padding: 5.5px 21.5px;
  font-family: "Pretendard";
  color: ${(props) => props.fontColor || "#494949"};
  background-color: ${(props) => props.bgColor || "#FDDE55"};
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const BoldHr = styled.div`
  width: 520px;
  height: 2px;
  background: #494949;
`;

const BasicHr = styled.div`
  width: 520px;
  height: 1px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #494949;
`;

const ListBox = styled.div`
  width: 520px;
  height: 170px;
`;

const Journal = styled.div`
  padding: 7.5px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const JournalTitle = styled.div`
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
const WriteDate = styled.div`
  color: #7f7f7f;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
`;
