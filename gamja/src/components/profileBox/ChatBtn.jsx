import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ChatBtn = ({ mentorId }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(`/chat-create/mentee/${mentorId}`)}>
        멘토님과 채팅
      </Button>
    </>
  );
};

export default ChatBtn;

const Button = styled.button`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  background: #494949;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
`;
