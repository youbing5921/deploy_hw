import React from "react";
import styled from "styled-components";

const ChatCard = ({ onBtnClick }) => {
  return (
    <ChatCardBtn onClick={onBtnClick}>
      <Title>채팅하기</Title>
      <SubTitle>
        멘티들과 이야기꽃을
        <br />
        피워보세요!
      </SubTitle>
    </ChatCardBtn>
  );
};

export default ChatCard;

const ChatCardBtn = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/mentorBtn2.svg"});
  border: none;
  width: 248px;
  height: 409.624px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 23px; */
`;

const Title = styled.div`
  color: #fff;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 9px;
`;

const SubTitle = styled.div`
  width: 132px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;
