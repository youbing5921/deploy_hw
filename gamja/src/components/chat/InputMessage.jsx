import React from "react";
import styled from "styled-components";
import SendBtn from "../../images/sendBtn.svg";

const InputMessage = () => {
  return (
    <InputBox>
      <Input type="text" />
      <SendButton>
        <img src={SendBtn} alt="send" />
      </SendButton>
    </InputBox>
  );
};

export default InputMessage;

const InputBox = styled.footer`
  position: relative;
  display: inline-flex;
  padding: 27px 40px;
  align-items: center;
  background: #f8f8f8;
`;

const Input = styled.input`
  width: 490px;
  height: 51px;
  border: none;
  border-radius: 100px;
  background: #f6f6f6;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;
  outline: none;
  font-size: 10px;
  font-weight: 300;
  padding: 3px 10px 3px 20px;
`;

const SendButton = styled.button`
  position: absolute;
  right: 53px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 40px;
    height: 40px;
  }
`;
