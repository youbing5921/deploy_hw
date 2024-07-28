import React from "react";
import styled from "styled-components";

const users = [
  {
    id: 1,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 2,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 3,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 4,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
];

const MenteeHistory = () => {
  return (
    <>
      <Wrapper>
        <Left></Left>
        <Right>
          {users.map((user) => (
            <Container key={user.id}>
              <InfoBox>
                <ContentCategoryBox>
                  {user.categories.map((category, idx) => (
                    <ContentCategory key={idx}>{category}</ContentCategory>
                  ))}
                </ContentCategoryBox>
              </InfoBox>
              <ConcernBox>{user.concern}</ConcernBox>
            </Container>
          ))}
        </Right>
      </Wrapper>
    </>
  );
};

export default MenteeHistory;

const Wrapper = styled.div`
  padding: 0px 40px;
`;

const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 15px;
  max-width: 386px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 66px;
  height: 57px;
  border-radius: 15px;
  background: #f8f8f8;
  padding: 10px;
  margin-top: 7px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
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
  padding: 2px 5px;
`;

const ConcernBox = styled.div`
  margin-top: 8px;
  max-height: 36px;
  overflow: hidden;
  color: #494949;
  font-size: 10px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
