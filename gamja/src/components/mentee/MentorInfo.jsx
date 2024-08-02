import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RateBox from "./RateBox";
import MentorImg from "../../images/MentorImg.svg";
import FollowYellow from "../../images/FollowYellow.svg";
import FollowGray from "../../images/FollowGray.svg";
import axios from "axios";

const MentorInfo = ({ infoList, toggleSubscription }) => {
  const navigate = useNavigate();

  // const postLike = () => {
  //   axios.post("http://127.0.0.1:8000/mentor/{mentorId}/likes/");
  // };

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
            {mentor.interests.map((cat, idx) => (
              <CategoryBox key={idx}>
                <Category>{cat}</Category>
                <CategoryCount>
                  {mentor.count[idx]}
                  <span>회</span>
                </CategoryCount>
              </CategoryBox>
            ))}
            <RateBox rating={mentor.rating} />
          </MiddleBox>
          <BtnBox>
            <GoRead>칼럼 읽기</GoRead>
            <GoChat onClick={() => navigate("/chat-create/mentee/:roomId/")}>
              채팅하기
            </GoChat>
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
  color: #494949;
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
  font-family: "Pretendard";
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
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 600;
  background: #fdde55;
`;
