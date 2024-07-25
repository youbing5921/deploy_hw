import React from "react";
import styled from "styled-components";

const Sender = () => {
  return (
    <>
      <BlueMessage>안녕하세요, 호기심천국님! 잘 찾아오셨네요^^</BlueMessage>
    </>
  );
};

export default Sender;

const BlueMessage = styled.div`
  border-radius: 15px;
  background: #03aed2;
  max-width: 332px;
  padding: 20px 25px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-left: auto;
`;
