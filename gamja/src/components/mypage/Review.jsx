import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Review = ({ Info, review }) => {
  const navigate = useNavigate();
  const hasReview = review && review.content;
  return (
    <>
      {hasReview ? (
        <Container>
          <Top>
            <Left>
              <CategoryBox>
                {Info.myReview?.chatroom_interests?.map((interest, idx) => (
                  <Category key={idx}>{interest.name}</Category>
                ))}
              </CategoryBox>
            </Left>
            <Right>
              <MoreBtn
                onClick={() =>
                  navigate(`/mypage/mentor/review-list/${Info.info.user}`)
                }
              >
                더보기
              </MoreBtn>
            </Right>
          </Top>
          <Comment>{Info.myReview?.content}</Comment>
        </Container>
      ) : (
        <Container>
          <BlankText>아직 작성된 후기가 없어요</BlankText>
        </Container>
      )}
    </>
  );
};

export default Review;

const Container = styled.div`
  margin-top: 5px;
  border-radius: 15px;
  background: #f8f8f8;
  width: 307px;
  padding: 15px 16px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const Right = styled.div``;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryBox = styled.div``;

const Category = styled.div`
  display: inline-block;
  padding: 3px 5px;
  border-radius: 10px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  margin-right: 4px;
`;

const MoreBtn = styled.div`
  padding: 3px 5px;
  border-radius: 10px;
  background: rgba(73, 73, 73, 0.2);
  border: none;
  color: #494949;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const Comment = styled.div`
  margin-top: 14px;
  display: -webkit-box;
  width: 299px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #494949;
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: 400;
`;

const BlankText = styled.div`
  padding: 16px 0px;
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 500;
`;
