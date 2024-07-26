import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import UserInfo from "../../components/mypage/UserInfo";
import JournalList from "../../components/mypage/JournalList";
import Arrow from "../../images/Arrow.svg";

const MyPageMentor = () => {
  return (
    <>
      <Container>
        <TopBar txt={"마이페이지"} marginLeft={"154px"} />
        <Both>
          <Left>
            <UserInfo />
            <CareerBox>
              <FontZone>
                <CareerFont>경력</CareerFont>
                <Next src={Arrow} alt="바로가기" />
              </FontZone>
              <CareerList>
                <Career>1999-2003 숙명전자 재직</Career>
                <Career>2003-2010 네이바 재직</Career>
                <Career>2011.05.20 결혼</Career>
                <Career>2012-2023 개인사업</Career>
                <Career>2024.03.03 보이지 멘토링</Career>
              </CareerList>
            </CareerBox>
          </Left>
          <Right></Right>
        </Both>
        <JournalList txt={"일지"} fontColor={"#fff"} bgColor={"#03AED2"} />
      </Container>
    </>
  );
};

export default MyPageMentor;

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

const Both = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 34px 40px;
`;
const Left = styled.div``;
const Right = styled.div``;

const CareerBox = styled.div`
  display: flex;
  margin-top: 12px;
  width: 157px;
  padding: 30px 0px;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  background: #f8f8f8;
  gap: 10px;
`;

const FontZone = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
`;

const CareerFont = styled.div`
  color: #494949;
  font-size: 15px;
  font-weight: 700;
`;

const Next = styled.img`
  width: 6.477px;
  height: 10.983px;
`;

const CareerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 15px;
`;
const Career = styled.div`
  color: #494949;
  font-size: 10px;
  font-weight: 500;
`;
