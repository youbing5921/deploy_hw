import React from "react";
import styled from "styled-components";
import ChatMentee from "../../images/ChatMentee.svg";
import { useNavigate } from "react-router-dom";

const SuggestMentee = ({ suggestList }) => {
  const navigate = useNavigate();

  return (
    <>
      {suggestList?.map((suggestion) => (
        <Wrapper key={suggestion.id}>
          <Both>
            <Left>
              <Profile
                src={ChatMentee}
                alt="ChatMentee"
                onClick={() =>
                  navigate(`/profile/mentee/${suggestion.mentee_id}`)
                }
              />
            </Left>
            <Right onClick={() => navigate(`/chat/mentor/${suggestion.id}`)}>
              <Username>{suggestion.mentee_name}</Username>
              <Message>{suggestion.title}</Message>
            </Right>
          </Both>
          <DateBox>
            <Date>{suggestion.last_chat}</Date>
          </DateBox>
        </Wrapper>
      ))}
    </>
  );
};

export default SuggestMentee;

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
