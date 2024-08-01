import React from "react";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";
import xBtn from "../../images/xBtn.svg";

const userInfo = [
  {
    id: "1",
    name: "돈이뭐길래",
    concern:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
    mentoringRecord: [
      {
        interest: "가치관",
        count: 10,
      },
      {
        interest: "재테크",
        count: 5,
      },
      {
        interest: "사랑",
        count: 10,
      },
      {
        interest: "생활지식",
        count: 20,
      },
      {
        interest: "인간관계",
        count: 20,
      },
      {
        interest: "진로",
        count: 10,
      },
    ],
    mymentoring: [
      {
        id: 1,
        interest: ["인간관계", "생활지식"],
        title: "사랑하는 사람과 경제적 수준 차이가 고민이에요.",
      },
      {
        id: 2,
        interest: ["가치관", "진로"],
        title: "사랑하는 사람과 경제적 수준 차이가 고민이에요.",
      },
      {
        id: 3,
        interest: ["사랑", "생활지식"],
        title: "사랑하는 사람과 경제적 수준 차이가 고민이에요.",
      },
    ],
  },
];

const MenteeProfile = () => {
  return (
    <>
      {userInfo.map((info) => (
        <Container key={info.id}>
          <MenteeBox>
            <Top>
              <NameBox>
                <Profile src={MenteeImg} />
                <Username>{info.name}</Username>
              </NameBox>
              <CloseBtn src={xBtn} />
            </Top>
            <ConcernBox>
              <Title>멘티의 한 줄 고민</Title>
              <Concern>{info.concern}</Concern>
            </ConcernBox>
            <HistoryBox>
              <Title>멘티의 멘토링 내역</Title>
              <History>
                <Column>
                  {info.mentoringRecord.slice(0, 3).map((record, index) => (
                    <Record key={index}>
                      <Interest>{record.interest}</Interest>
                      <Count>
                        {record.count}
                        <span>회</span>
                      </Count>
                    </Record>
                  ))}
                </Column>
                <Column>
                  {info.mentoringRecord.slice(3, 6).map((record, index) => (
                    <Record key={index}>
                      <Interest>{record.interest}</Interest>
                      <Count>
                        {record.count}
                        <span>회</span>
                      </Count>
                    </Record>
                  ))}
                </Column>
              </History>
              <DetailWrapper>
                <Details>
                  {info.mymentoring.map((mentoring) => (
                    <DetailBox key={mentoring.id}>
                      <DetailCategoryBox>
                        {mentoring.interest.map((interest, index) => (
                          <DetailCategory key={index}>
                            {interest}
                          </DetailCategory>
                        ))}
                      </DetailCategoryBox>
                      <DetailContent>{mentoring.title}</DetailContent>
                    </DetailBox>
                  ))}
                </Details>
              </DetailWrapper>
            </HistoryBox>
          </MenteeBox>
        </Container>
      ))}
    </>
  );
};

export default MenteeProfile;

const Container = styled.div`
  background: rgba(248, 248, 248, 0.85);
  margin: 0 auto;
  padding: 315px 86px;
`;
const MenteeBox = styled.div`
  width: 360px;
  border-radius: 20px;
  background: linear-gradient(180deg, #cdeff6 0%, #03aed2 100%);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 26px 25px 53px 43px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 14px;
`;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;
const Username = styled.div`
  color: #494949;
  font-size: 30px;
  font-weight: 500;
`;

const CloseBtn = styled.img`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
`;

const ConcernBox = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-top: 37px;
`;
const Concern = styled.div`
  border-radius: 15px;
  background: #f8f8f8;
  padding: 15px 20px;
  color: #494949;
  font-size: 15px;
  font-weight: 500;
`;

const HistoryBox = styled.div`
  margin-right: 20px;
`;

const History = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  gap: 11px;
  padding: 15px 23px;
  border-radius: 15px;
  background: #f8f8f8;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Record = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Interest = styled.div`
  padding: 4px 10px;
  border-radius: 9px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  font-size: 12px;
  font-weight: 500;
  margin-right: 43px;
`;

const Count = styled.div`
  color: #494949;
  text-align: right;
  font-size: 15px;
  font-weight: 500;
  > span {
    color: #a4a4a4;
    font-size: 8px;
    font-weight: 500;
    margin-left: 2px;
  }
`;

const DetailWrapper = styled.div`
  max-width: 339px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 14px;
`;

const Details = styled.div`
  display: flex;
  gap: 8px;
`;

const DetailBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: #f8f8f8;
  border-radius: 15px;
  flex: 0 0 auto;
  width: 115px;
  height: 96.5px;
  padding: 10px;
`;

const DetailCategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

const DetailCategory = styled.div`
  background: rgba(73, 73, 73, 0.2);
  padding: 3px 10px;
  border-radius: 9px;
  color: #494949;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;

const DetailContent = styled.div`
  margin-top: 15px;
  color: #494949;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
