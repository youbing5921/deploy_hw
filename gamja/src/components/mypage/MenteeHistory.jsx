import React, { useState } from "react";
import styled from "styled-components";
import CloseBtn from "../../images/xBtn.svg";

const users = [
  {
    id: 1,
    categories: ["생활 지식", "인간 관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 2,
    categories: ["생활 지식", "인간 관계"],
    concern:
      "도전하는 것이 무서워요. 도전에 따른 실패로 이제껏 쌓은 것들이 무너질까 두려워요",
  },
  {
    id: 3,
    categories: ["재테크", "인간 관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 4,
    categories: ["재테크", "인간 관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 5,
    categories: ["재테크", "인간 관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 6,
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
];

const MenteeHistory = ({ Info }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setSelectedCategory(null);
  };

  const filteredInfos = users.filter((user) =>
    user.categories.includes(selectedCategory)
  );

  return (
    <>
      <TitleBox>
        <Title>나의 멘토링 내역</Title>
        {selectedCategory && (
          <Button src={CloseBtn} alt="닫기 버튼" onClick={handleClose} />
        )}
      </TitleBox>
      {selectedCategory === null ? (
        <Wrapper>
          {Info.map((info) => {
            const leftCategories = info.mentoringRecord.slice(0, 3);
            const rightCategories = info.mentoringRecord.slice(3, 6);
            return (
              <Whole key={info.id}>
                <CateLeft>
                  {leftCategories.map((cat, idx) => (
                    <CategoryBox
                      key={idx}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      <Category>{cat}</Category>
                      <CategoryCount>
                        {info.count[idx]}
                        <span>회</span>
                      </CategoryCount>
                    </CategoryBox>
                  ))}
                </CateLeft>
                <CateRight>
                  {rightCategories.map((cat, idx) => (
                    <CategoryBox
                      key={idx}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      <Category>{cat}</Category>
                      <CategoryCount>
                        {info.count[idx + 3]}
                        <span>회</span>
                      </CategoryCount>
                    </CategoryBox>
                  ))}
                </CateRight>
              </Whole>
            );
          })}
        </Wrapper>
      ) : (
        <DetailWrapper>
          <Details>
            {filteredInfos.map((user, index) => (
              <DetailBox key={index}>
                <DetailCategoryBox>
                  {user.categories.map((category, idx) => (
                    <DetailCategory key={idx}>{category}</DetailCategory>
                  ))}
                </DetailCategoryBox>
                <DetailContent>{user.concern}</DetailContent>
              </DetailBox>
            ))}
          </Details>
        </DetailWrapper>
      )}
    </>
  );
};

export default MenteeHistory;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 355px;
`;

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
`;

const Button = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-left: 24px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Whole = styled.div`
  display: flex;
  justify-content: space-between;
  width: 293px;
  padding: 18px 23px;
  border-radius: 15px;
  background: #f8f8f8;
  margin-top: 11px;
`;

const CateLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const CateRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 42px;
  cursor: pointer;
`;

const Category = styled.div`
  padding: 3px 10px;
  border-radius: 9px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  &:hover {
    background: #fdde55;
  }
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

const DetailWrapper = styled.div`
  margin-left: 24px;
  max-width: 331px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 15px;
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
`;

const DetailBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: #f8f8f8;
  border-radius: 15px;
  flex: 0 0 auto;
  width: 90px;
  padding: 10px;
`;

const DetailCategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const DetailCategory = styled.div`
  background: #fdde55;
  padding: 3px 10px;
  border-radius: 9px;
  color: #494949;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

const DetailContent = styled.div`
  margin-top: 15px;
  color: #494949;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
