import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "../../images/Arrow.svg";
import MenteeImg from "../../images/MenteeImg.svg";
import TopBar from "../../components/common/TopBar";
import UserInfo from "../../components/mypage/UserInfo";
import JournalList from "../../components/mypage/JournalList";
import StarBox from "../../components/mypage/StarBox";
import History from "../../components/mypage/History";
import Review from "../../components/mypage/Review";
import Column from "../../components/mypage/Column";

let mypageInfo = [
  {
    id: "1",
    name: "척척육은영",
    career: [
      "1999-2003 숙명전자 재직",
      "2003-2010 네이바 재직",
      "2011.05.20 결혼",
      "2012-2023 개인사업",
      "2024.03.03 보이지 멘토링",
    ],
    category: ["가치관", "인간관계", "사랑"],
    count: ["10", "20", "2"],
    rating: "50",
  },
];

const MyPageMentor = () => {
  const [Info, setInfo] = useState(mypageInfo);
  return (
    <>
      {mypageInfo.map((info) => (
        <Container>
          <TopBar txt={"마이페이지"} marginLeft={"154px"} />
          <Both>
            <Left>
              <UserInfo profilImg={MenteeImg} Info={Info} />
              <CareerBox>
                <FontZone>
                  <CareerFont>경력</CareerFont>
                  <Next src={Arrow} alt="바로가기" />
                </FontZone>
                {info.career.map((ele, idx) => (
                  <CareerList>
                    <Career key={idx}>{ele}</Career>
                  </CareerList>
                ))}
              </CareerBox>
            </Left>
            <Right>
              <Rating>
                <Title>나의 등대 지수</Title>
                <SubTitle>나는 멘티들에게 얼마나 밝은 등대일까?</SubTitle>
                <StarBox rating={info.rating} />
              </Rating>
              <HistoryBox>
                <Title>나의 멘토링 내역</Title>
                <History />
              </HistoryBox>
              <ReviewBox>
                <Title>나의 멘토링 후기</Title>
                <Review />
              </ReviewBox>
            </Right>
          </Both>
          <JournalList txt={"일지"} fontColor={"#fff"} bgColor={"#03AED2"} />
          <ColumnBox>
            <Title>내가 스크랩한 칼럼</Title>
            <Column />
          </ColumnBox>
        </Container>
      ))}
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
  padding: 34px 40px;
  margin-bottom: 32px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  gap: 20px;
`;

const CareerBox = styled.div`
  display: flex;
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

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const SubTitle = styled.div`
  color: #7f7f7f;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 9px;
`;

const Rating = styled.div``;

const HistoryBox = styled.div`
  overflow: hidden;
`;
const ReviewBox = styled.div``;

const ColumnBox = styled.div`
  margin-top: 81px;
  margin-left: 40px;
`;
