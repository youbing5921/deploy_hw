import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { matchPath } from "react-router";
import ChatMentor from "../../images/ChatMentor.svg";
import ChatMentee from "../../images/ChatMentee.svg";

const RecentChat = ({ chatList }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  // const roomId = useParams();
  // console.log(roomId);

  if (matchPath(`mypage/mentor/journal/select/`, location)) {
    return (
      <>
        {chatList.all_chats?.map((chat) => (
          <Wrapper key={chat.id}>
            <Both
              onClick={() =>
                navigate(`/mypage/mentor/journal/write/${chat.id}`)
              }
            >
              <Left>
                <Profile src={ChatMentee} alt="ChatMentee" />
              </Left>
              <Right>
                <Username>{chat.mentee_name}</Username>
                <Message>{chat.title}</Message>
              </Right>
            </Both>
            <DateBox>
              <Date>{chat.last_chat}</Date>
            </DateBox>
          </Wrapper>
        ))}
      </>
    );
  }
  if (matchPath("/mypage/mentee/journal/select/", location)) {
    return (
      <>
        {chatList.map((chat) => (
          <Wrapper key={chat.id}>
            <Both
              onClick={() =>
                navigate(`/mypage/mentee/journal/write/${chat.id}`)
              }
            >
              <Left>
                <Profile src={ChatMentor} alt="ChatMentor" />
              </Left>
              <Right>
                <Username>{chat.mentor_name}</Username>
                <Message>{chat.title}</Message>
              </Right>
            </Both>
            <DateBox>
              <Date>{chat.last_chat}</Date>
            </DateBox>
          </Wrapper>
        ))}
      </>
    );
  }
  return null;
};

export default RecentChat;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 40px;
  justify-content: space-between;
`;

const Both = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const Left = styled.div`
  cursor: pointer;
`;
const Right = styled.div`
  cursor: pointer;
`;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
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
  color: #7f7f7f;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.33px;
`;
const DateBox = styled.div`
  padding-top: 5px;
`;
const Date = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.33px;
`;
