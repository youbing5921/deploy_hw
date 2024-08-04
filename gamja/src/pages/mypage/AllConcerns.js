import React from "react";
import MyConcern from "../../components/mypage/MyConcern";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";

const AllConcerns = () => {
  return (
    <>
      <Container>
        <TopBar txt={"마이페이지"} marginLeft={"154px"} />
        <ConcernBox>
          <MyConcern />
        </ConcernBox>
      </Container>
    </>
  );
};

export default AllConcerns;

const Container = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 33px;
  background: #ededed;
`;
const ConcernBox = styled.div``;
