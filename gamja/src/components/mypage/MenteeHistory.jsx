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
  {
    id: 5,
    categories: ["재", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 6,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 7,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 8,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 9,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 10,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 11,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
];

const MenteeHistory = ({ Info }) => {
  return (
    <>
      <Wrapper>
        {Info.map((info) => (
          <Left key={info.id}>
            {info.mentoringRecord.map((cat, idx) => (
              <CategoryBox key={idx}>
                <Category>{cat}</Category>
                <CategoryCount>
                  {info.count[idx]}
                  <span>회</span>
                </CategoryCount>
              </CategoryBox>
            ))}
          </Left>
        ))}
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
  display: flex;
  gap: 3px;
  padding: 0px 40px;
`;

const Left = styled.div`
  margin-top: 5px;
  width: 97px;
  padding: 17px 10px;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 4px 0px 10px -5px rgba(0, 0, 0, 0.25);
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
`;

const Category = styled.div`
  padding: 3px 7px;
  border-radius: 9px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  text-align: center;
  font-size: 8px;
  font-weight: 500;
`;

const CategoryCount = styled.span`
  color: #494949;
  font-size: 15px;
  font-weight: 500;

  > span {
    color: #a4a4a4;
    font-size: 8px;
    font-weight: 500;
  }
`;
const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: 4px;
  border-radius: 15px;
  /* max-width: 386px; */
  max-height: 165px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 10px;
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 66px;
  height: 57px;
  border-radius: 15px;
  background: #f8f8f8;
  padding: 10px;
  /* margin-top: 5px; */
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
