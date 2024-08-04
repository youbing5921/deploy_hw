import React from "react";
import styled from "styled-components";

const InputContent = ({ setContent }) => {
  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Container>
        <InputZone onChange={handleInputChange} />
      </Container>
    </>
  );
};

export default InputContent;

const Container = styled.div`
  margin-top: 8px;
`;

const InputZone = styled.textarea`
  border-radius: 20px;
  background: #ededed;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;
  padding: 10px 10px;
  border: none;
  outline: none;
  resize: none;
  height: auto;
  width: 318px;
  height: 93px;
`;
