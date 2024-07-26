import React from "react";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";

const Review = () => {
  return (
    <>
      <Container>
        <Top>
          <Left>
            <Low>
              <Profile src={MenteeImg} alt="menteeImg" />
            </Low>
            <Middle>
              <Username>돈이 뭐길래</Username>
              <Category>재테크</Category>
              <Category>사랑</Category>
            </Middle>
          </Left>
          <Right>
            <High>
              <MoreBtn>더보기</MoreBtn>
            </High>
          </Right>
        </Top>
        <Comment>
          닉값합니다! 진짜 척척박사세요. 다음에 또 고민이 생기면 육은영멘토님께
          채팅해보려구요! 감사합니다 :)
        </Comment>
      </Container>
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
  padding: 3px 9px;
  border-radius: 5px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 3px;
`;

const MoreBtn = styled.button`
  /* width: 34px;
  height: 15px; */
  padding: 4px 7.5px;
  border-radius: 5px;
  background: rgba(73, 73, 73, 0.2);
  border: none;
  color: #494949;
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
