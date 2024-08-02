import React, { useState } from "react";
import styled from "styled-components";
import CloseBtn from "../../images/xBtn.svg";

const MenteeHistory = ({ Info }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setSelectedCategory(null);
  };

  const filteredInfos = Info.myMentoring?.filter((mentoring) =>
    mentoring.interests.some((interest) => interest.name === selectedCategory)
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
          <Whole>
            <CateLeft>
              {Info.mentoringRecord?.slice(0, 3)?.map((cat, idx) => (
                <CategoryBox
                  key={idx}
                  onClick={() => handleCategoryClick(cat.interest)}
                >
                  <Category>{cat.interest}</Category>
                  <CategoryCount>
                    {cat.count}
                    <span>회</span>
                  </CategoryCount>
                </CategoryBox>
              ))}
            </CateLeft>
            <CateRight>
              {Info.mentoringRecord?.slice(3)?.map((cat, idx) => (
                <CategoryBox
                  key={idx}
                  onClick={() => handleCategoryClick(cat.interest)}
                >
                  <Category>{cat.interest}</Category>
                  <CategoryCount>
                    {cat.count}
                    <span>회</span>
                  </CategoryCount>
                </CategoryBox>
              ))}
            </CateRight>
          </Whole>
        </Wrapper>
      ) : (
        <DetailWrapper>
          <Details>
            {filteredInfos?.map((mentoring) => (
              <DetailBox key={mentoring.id}>
                <DetailCategoryBox>
                  {mentoring.interests?.map((interest, idx) => (
                    <DetailCategory key={idx}>{interest.name}</DetailCategory>
                  ))}
                </DetailCategoryBox>
                <DetailContent>{mentoring.title}</DetailContent>
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
  background: #fdde55;
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
