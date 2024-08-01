import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import SubBar from "../../components/mypage/SubBar";
import RecentChat from "../../components/mypage/RecentChat";

const MentorSelectChat = () => {
  return (
    <>
      <Container>
        <TopBar txt={"멘토링 일지"} />
        <SubBar />
        <RecentChat />
      </Container>
    </>
  );
};

export default MentorSelectChat;

const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #f8f8f8;
  margin: 0 auto;
`;
