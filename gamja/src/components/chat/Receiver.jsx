import React from "react";
import styled from "styled-components";
import ChatMentee from "../../images/ChatMentee.svg";

const Receiver = ({ message, username }) => {
  return (
    <MessageBox>
      <ProfileImg src={ChatMentee} alt="멘티 프로필" />
      <NameBubble>
        <Username>{username}</Username>
        <WhiteMessage>{message}</WhiteMessage>
      </NameBubble>
    </MessageBox>
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
  margin-bottom: 24px;
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
  max-width: 332px;
  padding: 20px 25px;
  border-radius: 15px;
  background: #fff;
  color: #494949;
  font-size: 20px;
  font-weight: 500;
  margin-right: auto;
`;
