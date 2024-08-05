import React from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import { useNavigate } from "react-router-dom";

const Review = ({ review, mentorInfo }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <>
          <Top>
            <Left>
              <Low>
                <Profile src={MentorImg} alt="menteeImg" />
              </Low>
              {review.length === 0 ? null : (
                <Middle>
                  <Username>{review.mentee_name}</Username>
                  {review.chatroom_interests.map((elt, idx) => (
                    <Category key={idx}>{elt.name}</Category>
                  ))}
                </Middle>
              )}
            </Left>
            <Right>
              <High>
                <MoreBtn
                  onClick={() =>
                    navigate(`/profile/mentor/review-list/${mentorInfo.user}`)
                  }
                >
                  더보기
                </MoreBtn>
              </High>
            </Right>
          </Top>
          <Comment>{review.content}</Comment>
        </>
      </Container>
    </>
  );
};

export default Review;

const Container = styled.div`
  margin-top: 5px;
  border-radius: 15px;
  background: #f8f8f8;
  width: 294px;
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
const Category = styled.div`
  display: inline-block;
  padding: 3px 8px;
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
  padding: 4px 7.5px;
  border-radius: 10px;
  background: rgba(73, 73, 73, 0.1);
  border: none;
  color: #7f7f7f;
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
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
