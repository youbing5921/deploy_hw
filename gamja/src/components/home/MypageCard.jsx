import React from "react";
import styled from "styled-components";

const MypageCard = ({ onBtnClick, $fontColor, $bgimg }) => {
  return (
    <MypageCardBtn onClick={onBtnClick} $fontColor={$fontColor} $bgimg={$bgimg}>
      <Title $fontColor={$fontColor}>마이페이지</Title>
      <SubTitle $fontColor={$fontColor}>
        내 정보를 확인하고 <br />
        수정할 수 있어요!
      </SubTitle>
    </MypageCardBtn>
  );
};

export default MypageCard;

const MypageCardBtn = styled.div`
  background-image: url(${(props) => (props.$bgimg ? props.$bgimg : "")});
  border: none;
  width: 248px;
  height: 380px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 9px;
  color: ${(props) => props.$fontColor || "#494949"};
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: ${(props) => props.$fontColor || "#494949"};
`;
