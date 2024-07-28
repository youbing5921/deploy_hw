import React, { useState } from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import TopBar from "../../components/common/TopBar";
import UserInfo from "../../components/mypage/UserInfo";
import MyConcern from "../../components/mypage/MyConcern";
import JournalList from "../../components/mypage/JournalList";
import MenteeHistory from "../../components/mypage/MenteeHistory";
import Column from "../../components/mypage/Column";

let mypageInfo = [
  {
    id: "1",
    name: "척척육은영",
    category: ["인간관계", "가치관", "재테크"],
    mentoringRecord: [
      "가치관",
      "재테크",
      "사랑",
      "생활 지식",
      "인간 관계",
      "진로",
    ],
    count: ["10", "20", "2", "3", "20", "0"],
  },
];
const MypageMentee = () => {
  const [Info, setInfo] = useState(mypageInfo);
  return (
    <>
      <Container>
        <TopBar txt={"마이페이지"} marginLeft={"154px"} />
        <Both>
          <UserInfo
            profilImg={MentorImg}
            Info={Info}
            $categoryBg={"rgba(73, 73, 73, 0.20)"}
            $categoryColor={"#494949"}
          />
        </Both>
        <ConcernBox>
          <MyConcern />
        </ConcernBox>
        <HistoryBox>
          <Title>나의 멘토링 내역</Title>
          <MenteeHistory Info={Info} />
        </HistoryBox>
        <JournalBox>
          <JournalList txt={"일지"} />
        </JournalBox>
        <ColumnBox>
          <Tit>내가 스크랩한 칼럼</Tit>
          <Column
            $categoryBg={"rgba(73, 73, 73, 0.20)"}
            $categoryColor={"#494949"}
          />
        </ColumnBox>
      </Container>
    </>
  );
};

export default MypageMentee;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 40px;
`;
const Both = styled.div`
  display: flex;
  flex-direction: row;
  padding: 34px 40px;
`;

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
  padding: 0px 40px;
`;
const ConcernBox = styled.div`
  margin-bottom: 27px;
`;

const HistoryBox = styled.div`
  margin-bottom: 60px;
`;
const JournalBox = styled.div`
  margin-bottom: 81px;
`;
const Tit = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const ColumnBox = styled.div`
  padding: 0px 40px;
`;
