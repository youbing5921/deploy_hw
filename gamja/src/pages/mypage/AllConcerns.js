import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import MyConcernList from "../../components/mypage/MyConcernList";

const AllConcerns = () => {
  return (
    <>
      <Container>
        <TopBar txt={"마이페이지"} marginLeft={"154px"} />
        <ConcernBox>
          <MyConcernList />
        </ConcernBox>
      </Container>
    </>
  );
};

export default AllConcerns;

const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #ededed;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ConcernBox = styled.div`
  padding: 33px 40px 7px 40px;
`;
