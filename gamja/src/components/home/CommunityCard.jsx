import React from "react";
import styled from "styled-components";

const CommunityCard = ({ onBtnClick, $fontColor, $bgimg }) => {
  return (
    <CommunityCardBtn
      onClick={onBtnClick}
      $fontColor={$fontColor}
      $bgimg={$bgimg}
    >
      <Title $fontColor={$fontColor}>커뮤니티</Title>
      <SubTitle $fontColor={$fontColor}>
        망망대해를 함께 항해하는
        <br />
        보이저들과 이야기 공유해요!
      </SubTitle>
    </CommunityCardBtn>
  );
};

export default CommunityCard;

const CommunityCardBtn = styled.div`
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
