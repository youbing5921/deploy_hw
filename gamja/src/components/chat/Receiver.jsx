import React from "react";
import styled from "styled-components";
import ChatMentee from "../../images/ChatMentee.svg";

const Receiver = () => {
  return (
    <>
      <MessageBox>
        <ProfileImg src={ChatMentee} alt="멘티 프로필" />
        <NameBubble>
          <Username>호기심천국</Username>
          <WhiteMessage>
            안녕하세요, 멘토님! “진로를 선택할 때 가장 중요한 기준”에 대해
            여쭙고 싶어 채팅드렸습니다.
          </WhiteMessage>
        </NameBubble>
      </MessageBox>
    </>
  );
};

export default Receiver;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 1000px;
  background-color: #ffffff;
  flex-shrink: 0;
`;

const MessageBox = styled.div`
  display: flex;
  gap: 8px;
`;

const NameBubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Username = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 600;
`;

const WhiteMessage = styled.div`
  display: flex;
  max-width: 332px;
  padding: 20px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: #fff;
  color: #494949;
  font-size: 20px;
  font-weight: 500;
`;
