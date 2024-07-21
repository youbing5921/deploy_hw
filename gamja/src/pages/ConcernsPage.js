import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import CategoryBar from "../components/CategoryBar";
import Concern from "../components/Concern";

const ConcernsPage = () => {
  return (
    <>
      <Container>
        <TopContainer>
          <TopBar txt={"멘토 돕기"} />
          <CategoryBar />
        </TopContainer>
        <Concern />
      </Container>
    </>
  );
};

export default ConcernsPage;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  height: 1230px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
`;
