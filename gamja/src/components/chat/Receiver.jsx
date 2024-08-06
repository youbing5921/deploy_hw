import React from "react";
import styled from "styled-components";
import ChatMentee from "../../images/ChatMentee.svg";
import ChatMentor from "../../images/ChatMentor.svg";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";

const Receiver = ({ message, username }) => {
  const location = useLocation().pathname;

  if (matchPath("/chat/mentor/:roomId", location)) {
    return (
      <MessageBox>
        <ProfileImg src={ChatMentee} alt="멘티 프로필" />
        <NameBubble>
          <Username>{username}</Username>
          <WhiteMessage>{message}</WhiteMessage>
        </NameBubble>
      </MessageBox>
    );
  }
  if (matchPath("/chat/mentee/:roomId", location)) {
    return (
      <MessageBox>
        <ProfileImg src={ChatMentor} alt="멘토 프로필" />
        <NameBubble>
          <Username>{username}</Username>
          <WhiteMessage>{message}</WhiteMessage>
        </NameBubble>
      </MessageBox>
    );
  }
  return null;
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
  max-width: 320px;
  padding: 15px 20px;
  border-radius: 15px;
  background: #fff;
  color: #494949;
  font-size: 18px;
  font-weight: 500;
  margin-right: auto;
`;
