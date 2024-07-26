import React from "react";
import styled from "styled-components";

const Sender = ({ message }) => {
  return (
    <MessageBox>
      <BlueMessage>{message}</BlueMessage>
    </MessageBox>
  );
};

export default Sender;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
`;

const BlueMessage = styled.div`
  max-width: 332px;
  padding: 20px 25px;
  border-radius: 15px;
  background: #03aed2;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-left: auto;
`;
