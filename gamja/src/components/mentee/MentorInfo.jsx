import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RateBox from "./RateBox";
import MentorImg from "../../images/MentorImg.svg";
import FollowYellow from "../../images/FollowYellow.svg";
import FollowGray from "../../images/FollowGray.svg";
import axios from "axios";

const MentorInfo = ({ infoList }) => {
  const navigate = useNavigate();

  const postLike = (mentor) => {
    axios
      .post(
        `http://127.0.0.1:8000/mentors/${mentor.mentor_id}/likes/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("멘토 관심 설정이 완료되었습니다.");
      })
      .catch((error) => {
        console.log(error);
        console.log(mentor.mentor_id);
        alert("멘토 관심 설정에 실패하였습니다.");
      });
  };
  return (
    <>
      {infoList.map((mentor) => (
        <InfoBox key={mentor.mentor_id}>
          <ProfileBox>
            <Left>
              <Profile
                src={MentorImg}
                alt="profileImg"
                onClick={() => navigate(`/profile/mentor/${mentor.user}`)}
              />
              <Name onClick={() => navigate(`/profile/mentor/${mentor.user}`)}>
                {mentor.mentor_name}
              </Name>
            </Left>
            <SubscribeButton onClick={() => postLike(mentor)}>
              <img src={FollowGray} alt={"NotFollow"} />
            </SubscribeButton>
          </ProfileBox>
          <MiddleBox>
            {mentor.mentoring_record.map((cat, idx) => (
              <CategoryBox key={idx}>
                <Category>{cat.interest}</Category>
                <CategoryCount>
                  {cat.count}
                  <span>회</span>
                </CategoryCount>
              </CategoryBox>
            ))}
          </MiddleBox>
          <RateBox rating={mentor.rating} />
          <BtnBox>
            <GoRead>칼럼 읽기</GoRead>
            <GoChat
              onClick={() =>
                navigate(`/chat-create/mentee/${mentor.mentor_id}`)
              }
            >
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
  gap: 8px;
  flex-shrink: 0;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
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
  gap: 14px;
  margin-top: 12px;
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
  margin-top: 12px;
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
