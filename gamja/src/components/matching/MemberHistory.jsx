import React from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";

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
                <Profile src={MentorImg} alt="profileImg" />
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
  gap: 3px;
`;

const CategoryBox = styled.div`
  display: flex;
  width: 89px;
  flex-direction: column;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 4px 0px 10px -5px rgba(0, 0, 0, 0.25);
  padding: 16px 10px 13px 10px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  p {
    background: rgba(73, 73, 73, 0.2);
    border-radius: 9px;
    color: #494949;
    margin: 5px 0;
    padding: 3px 5px;
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 13px;
    margin-right: 4px;
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
    margin-left: 2px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 15px;
  max-width: 210px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 152px;
  height: 93px;
  border-radius: 15px;
  background: #f8f8f8;
  padding: 17px 12px;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PhotoBox = styled.div``;
const NameBox = styled.div``;

const Username = styled.div`
  color: #494949;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
`;

const ContentCategoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const ContentCategory = styled.div`
  border-radius: 10px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  padding: 3px 5px;
`;

const ConcernBox = styled.div`
  margin-top: 15px;
  max-height: 36px;
  overflow: hidden;
  color: #494949;
  font-size: 15px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
