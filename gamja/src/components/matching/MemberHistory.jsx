import React from "react";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";

const users = [
  {
    id: 1,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 2,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 3,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 4,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
];

const MentorHistory = ({ record, mentoring }) => {
  return (
    <Wrapper>
      <CategoryBox>
        {record.map((elt, idx) => {
          return (
            <div key={idx}>
              <p>{elt.interest}</p>
              <CategoryCount>
                {elt.count}
                <span>회</span>
              </CategoryCount>
            </div>
          );
        })}
      </CategoryBox>
      <Right>
        {mentoring.map((elt) => (
          <Container key={elt.id}>
            <InfoBox>
              <PhotoBox>
                <Profile src={MenteeImg} alt="profileImg" />
              </PhotoBox>
              <NameBox>
                <Username>{elt.mentee_name}</Username>
                <ContentCategoryBox>
                  {elt.interests.map((category, idx) => (
                    <ContentCategory key={idx}>{category.name}</ContentCategory>
                  ))}
                </ContentCategoryBox>
              </NameBox>
            </InfoBox>
            <ConcernBox>{elt.title}</ConcernBox>
          </Container>
        ))}
      </Right>
    </Wrapper>
  );
};

export default MentorHistory;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const CategoryBox = styled.div`
  display: flex;
  width: 78px;
  height: 67px;
  flex-direction: column;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 4px 0px 10px -5px rgba(0, 0, 0, 0.25);
  gap: 6.5px;
  padding: 18px 10px 18px 10px;
  div {
    display: flex;
    flex-direction: row;
  }
  p {
    background: rgba(73, 73, 73, 0.2);
    border-radius: 9px;
    color: #494949;
    margin: 0;
    padding: 2.5px 7px 2.5px 7px;
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 10px;
  }
`;

const CategoryCount = styled.span`
  color: #494949;
  font-size: 15px;
  font-weight: 500;
  margin-left: auto;
  span {
    color: #a4a4a4;
    font-size: 8px;
    font-weight: 500;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 15px;
  max-width: 216px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 76px;
  height: 66px;
  border-radius: 15px;
  background: #f8f8f8;
  padding: 12px 9px;
`;

const Profile = styled.img`
  width: 25px;
  height: 25px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const PhotoBox = styled.div``;
const NameBox = styled.div``;

const Username = styled.div`
  color: #494949;
  font-size: 8px;
  font-weight: 500;
  margin-bottom: 2px;
`;

const ContentCategoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ContentCategory = styled.div`
  border-radius: 5px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  text-align: center;
  font-size: 5px;
  font-weight: 500;
  padding: 2px 3px;
`;

const ConcernBox = styled.div`
  margin-top: 8px;
  max-height: 28px;
  overflow: hidden;
  color: #494949;
  font-size: 10px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
