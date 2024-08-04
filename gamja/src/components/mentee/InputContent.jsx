import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlankYellow from "../../images/BlankYellow.svg";
import sendYellow from "../../images/sendYellow.svg";

const InputContent = () => {
  const [sendBtnSrc, setSendBtnSrc] = useState(BlankYellow);
  const [content, setContent] = useState("");
  useEffect(() => {
    setSendBtnSrc(content ? sendYellow : BlankYellow);
  }, [content]);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Container>
        <InputZone value={content} onChange={handleInputChange} />
        <SendButton src={sendBtnSrc} alt="send" />
      </Container>
    </>
  );
};

export default InputContent;

const Container = styled.div`
  margin-top: 16px;
  display: flex;
  width: 312px;
  height: 101px;
  padding: 10px 13px;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 15px;
  background: #f8f8f8;
`;

const InputZone = styled.input`
  border-radius: 100px;
  background: #ededed;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  width: 254px;
  height: 24px;
  padding: 3px 10px;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  white-space: pre-wrap;
`;

const SendButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
