import React from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
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
              <Low>
                <Profile src={MentorImg} alt="menteeImg" />
              </Low>
              <Middle>
                <Username>{review.mentee_name}</Username>
                <CategoryBox>
                  {review.chatroom_interests?.map((interest, idx) => (
                    <Category key={idx}>{interest.name}</Category>
                  ))}
                </CategoryBox>
              </Middle>
            </Left>
            <Right>
              <High>
                <MoreBtn
                  onClick={() =>
                    navigate(`/profile/mentor/review-list/${Info.info.user}`)
                  }
                >
                  더보기
                </MoreBtn>
              </High>
            </Right>
          </Top>
          <Comment>{review.content}</Comment>
        </Container>
      ) : (
        <Container>
          <BlankText>{Info.name}님께 멘토링을 받고 후기를 남겨보세요</BlankText>
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
  height: 70px;
  padding: 14px 16px 19px 16px;
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
  /* gap: 9px; */
`;
const Profile = styled.img`
  width: 40px;
  height: 40px;
`;
const Low = styled.div``;

const Middle = styled.div``;

const High = styled.div``;

const Username = styled.div`
  color: #494949;
  font-size: 13px;
  font-weight: 500;
`;
const CategoryBox = styled.div``;
const Category = styled.div`
  display: inline-block;
  padding: 2px 5px;
  border-radius: 10px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 3px;
`;

const MoreBtn = styled.button`
  padding: 3px 9px;
  border-radius: 10px;
  background: rgba(73, 73, 73, 0.1);
  border: none;
  color: #7f7f7f;
  text-align: center;
  font-family: Pretendard;
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
  padding: 30px 0px;
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
`;
