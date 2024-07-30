import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import MenteeProfile from "../../components/mypage/MenteeProfile";
import MyConcern from "../../components/mypage/MyConcern";
import JournalList from "../../components/mypage/JournalList";
import MenteeHistory from "../../components/mypage/MenteeHistory";
import Column from "../../components/mypage/Column";

let mypageInfo = [
  {
    id: "1",
    name: "돈이 뭐길래",
    mentoringRecord: [
      "가치관",
      "재테크",
      "사랑",
      "생활지식",
      "인간관계",
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
          <Left>
            <MenteeProfile Info={Info} />
          </Left>
          <Right>
            <HistoryBox>
              <MenteeHistory Info={Info} />
            </HistoryBox>
          </Right>
        </Both>
        <ConcernBox>
          <MyConcern />
        </ConcernBox>
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

const Left = styled.div``;
const Right = styled.div``;

const ConcernBox = styled.div`
  margin-bottom: 27px;
`;

const HistoryBox = styled.div``;
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
  padding-left: 40px;
`;
