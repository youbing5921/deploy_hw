import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";

const CreateChat = () => {
  return (
    <>
      <Container>
        <TopBar txt={"채팅하기"} />
      </Container>
    </>
  );
};

export default CreateChat;

const Container = styled.div`
  background: #ededed;
  width: 600px;
  margin: 0 auto;
  height: 1230px;
`;
