import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";

const Sender = ({ message }) => {
  const location = useLocation().pathname;

  if (matchPath("/chat/mentor/:roomId", location)) {
    return (
      <MessageBox>
        <BlueMessage>{message}</BlueMessage>
      </MessageBox>
    );
  }

  if (matchPath("/chat/mentee/:roomId", location)) {
    return (
      <MessageBox>
        <YellowMessage>{message}</YellowMessage>
      </MessageBox>
    );
  }

  return null;
};

export default Sender;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
`;

const BlueMessage = styled.div`
  max-width: 320px;
  padding: 15px 20px;
  border-radius: 15px;
  background: #03aed2;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-left: auto;
`;

const YellowMessage = styled.div`
  max-width: 320px;
  padding: 15px 20px;
  border-radius: 15px;
  background: #fdde55;
  color: #494949;
  font-size: 18px;
  font-weight: 500;
  margin-left: auto;
`;
