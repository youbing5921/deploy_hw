import React from "react";
import styled from "styled-components";

const ChatCard = ({ txt, onBtnClick, $fontColor, $bgimg }) => {
  return (
    <ChatCardBtn onClick={onBtnClick} $fontColor={$fontColor} $bgimg={$bgimg}>
      <Title $fontColor={$fontColor}>채팅하기</Title>
      <SubTitle $fontColor={$fontColor}>
        {txt}들과 이야기꽃을
        <br />
        피워보세요!
      </SubTitle>
    </ChatCardBtn>
  );
};

export default ChatCard;

const ChatCardBtn = styled.div`
  background-image: url(${(props) => (props.$bgimg ? props.$bgimg : "")});
  border: none;
  width: 248px;
  height: 409.624px;
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
