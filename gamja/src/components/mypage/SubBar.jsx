import React from "react";
import styled from "styled-components";

const SubBar = () => {
  return (
    <>
      <Container>
        <Text>멘토링 일지를 작성할 채팅 내역을 선택해주세요.</Text>
      </Container>
    </>
  );
};

export default SubBar;

const Container = styled.div`
  padding: 15px 40px;
  opacity: 0.9;
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
`;

const Text = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.44px;
`;
