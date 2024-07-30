import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";

const ChatListMentee = () => {
  return (
    <>
      <Container>
        <TopBar txt={"채팅하기"} />
      </Container>
    </>
  );
};

export default ChatListMentee;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  padding-bottom: 40px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
