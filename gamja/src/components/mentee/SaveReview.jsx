import React from "react";
import styled from "styled-components";

const SaveReview = ({ handleSubmit }) => {
  return (
    <>
      <Button onClick={handleSubmit}>멘토링 후기 저장</Button>
    </>
  );
};

export default SaveReview;

const Button = styled.button`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  background: #494949;
  border: none;
  width: 338px;
  padding: 10px 24px;
  cursor: pointer;
`;
