import React from "react";
import styled from "styled-components";
import ChatMentor from "../../images/ChatMentor.svg";

const MessageArr = [
  {
    id: 1,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
  {
    id: 2,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
  {
    id: 3,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
  {
    id: 4,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
  {
    id: 5,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
  {
    id: 6,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
  {
    id: 7,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
  },
];

const RecentChat = () => {
  return (
    <>
      {MessageArr.map((message) => (
        <Wrapper key={message.id}>
          <Left>
            <Profile src={ChatMentor} alt="ChatMentee" />
          </Left>
          <Right>
            <Username>{message.username}</Username>
            <Message>{message.message}</Message>
          </Right>
        </Wrapper>
      ))}
    </>
  );
};

export default RecentChat;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 40px;
  gap: 14px;
`;

const Left = styled.div``;
const Right = styled.div``;

const Profile = styled.img`
  width: 65px;
  height: 65px;
`;

const Username = styled.div`
  color: #494949;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
`;

const Message = styled.div`
  color: #494949;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.33px;
`;
