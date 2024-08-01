import React from "react";
import styled from "styled-components";

const AdZone = () => {
  return (
    <>
      <Container>여기는 이렇게 자리 비워둘게요</Container>
    </>
  );
};

export default AdZone;

const Container = styled.div`
  border-radius: 20px;
  background: #fff;
  display: flex;
  width: 520px;
  height: 166px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;
