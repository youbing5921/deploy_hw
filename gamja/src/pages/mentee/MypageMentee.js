import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";

const MypageMentee = () => {
  return (
    <>
      <Container>
        <TopBar txt={"마이페이지"} marginLeft={"154px"} />
      </Container>
    </>
  );
};

export default MypageMentee;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  height: 1230px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
