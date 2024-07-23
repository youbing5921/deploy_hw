import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MentorImg from "../../images/MentorImg.svg";
import FollowYellow from "../../images/FollowYellow.svg";
import FollowGray from "../../images/FollowGray.svg";

const MentorInfo = ({ infoList, toggleSubscription }) => {
  const navigate = useNavigate();

  return (
    <>
      {infoList.map((mentor) => (
        <InfoBox key={mentor.id}>
          <ProfileBox>
            <Profile
              src={MentorImg}
              alt="profileImg"
              onClick={() => navigate(`/userpage/${mentor.name}`)}
            />
            <Name onClick={() => navigate(`/userpage/${mentor.name}`)}>
              {mentor.name}
            </Name>
            <SubscribeButton onClick={() => toggleSubscription(mentor.id)}>
              <img
                src={mentor.isSubscribed ? FollowYellow : FollowGray}
                alt={mentor.isSubscribed ? "Following" : "NotFollow"}
              />
            </SubscribeButton>
          </ProfileBox>
          <MiddleBox>
            <CategoryBox>
              <Category>{mentor.category1}</Category>
              <CategoryCount>
                {mentor.count1}
                <span>회</span>
              </CategoryCount>
              <Category>{mentor.category2}</Category>
              <CategoryCount>
                {mentor.count2}
                <span>회</span>
              </CategoryCount>
              <Category>{mentor.category3}</Category>
              <CategoryCount>
                {mentor.count3}
                <span>회</span>
              </CategoryCount>
            </CategoryBox>
            <RatingBox>
              <Stars>⭐⭐⭐⭐⭐</Stars>
              <Rating>
                {mentor.rating}
                <span>/100</span>
              </Rating>
            </RatingBox>
          </MiddleBox>
          <BtnBox>
            <GoRead>칼럼 읽기</GoRead>
            <GoChat>채팅하기</GoChat>
          </BtnBox>
        </InfoBox>
      ))}
    </>
  );
};

export default MentorInfo;

const InfoBox = styled.div`
  border-radius: 15px;
  background: #f8f8f8;
  display: flex;
  width: 219px;
  padding: 18px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 6px;
`;

const Name = styled.div`
  color: #494949;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 87px;
`;

const SubscribeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const MiddleBox = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5px;
  justify-content: space-between;
`;

const Category = styled.div`
  padding: 3px 8px;
  border-radius: 9px;
  background: rgba(253, 222, 85, 0.2);
  color: #ffd000;
  font-size: 10px;
  font-weight: 500;
`;

const CategoryCount = styled.span`
  color: #494949;
  font-size: 15px;
  font-weight: 500;
  margin-right: auto;

  > span {
    color: #a4a4a4;
    font-size: 8px;
    font-weight: 500;
  }
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 15px;
  background: #f1f0f0;
  width: 189px;
  padding: 5px 15px;
`;

const Stars = styled.div`
  color: #ffd700;
`;

const Rating = styled.div`
  color: #494949;
  text-align: center;
  font-size: 10px;
  font-weight: 600;

  > span {
    color: #a4a4a4;
    font-size: 10px;
    font-weight: 600;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const GoRead = styled.button`
  padding: 8px 25px;
  border-radius: 8px;
  cursor: pointer;
  color: #494949;
  border: none;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #fdde55;
`;

const GoChat = styled.button`
  padding: 8px 25px;
  border-radius: 8px;
  cursor: pointer;
  color: #494949;
  border: none;
  font-size: 15px;
  font-weight: 600;
  background: #fdde55;
`;
