import React, { useState } from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import TopBar from "../../components/common/TopBar";
import UserInfo from "../../components/mypage/UserInfo";
import MyConcern from "../../components/mypage/MyConcern";
import JournalList from "../../components/mypage/JournalList";
import MenteeHistory from "../../components/mypage/MenteeHistory";

let mypageInfo = [
  {
    id: 1,
    name: "척척육은영",
    category: ["가치관", "인간관계", "사랑"],
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
            categoryBg={"rgba(73, 73, 73, 0.20)"}
            categoryColor={"#494949"}
          />
        </Both>
        <ConcernBox>
          <MyConcern />
        </ConcernBox>
        <HistoryBox>
          <MenteeHistory />
        </HistoryBox>
        <JournalBox>
          <JournalList />
        </JournalBox>
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
const Both = styled.div`
  display: flex;
  flex-direction: row;
  padding: 34px 40px;
  margin-bottom: 32px;
`;
const ConcernBox = styled.div`
  margin-bottom: 27px;
`;

const HistoryBox = styled.div`
  margin-bottom: 60px;
`;
const JournalBox = styled.div``;
