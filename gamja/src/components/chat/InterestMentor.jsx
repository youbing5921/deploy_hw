import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatMentor from "../../images/ChatMentor.svg";
import FollowYellow from "../../images/FollowYellow.svg";
import FollowGray from "../../images/FollowGray.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InterestMentee = ({ interestList }) => {
  const [like, setLike] = useState(interestList);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    setLike(interestList);
  }, [interestList]);

  const postLike = (mentor) => {
    const Server_IP = process.env.REACT_APP_Server_IP;
    axios
      .post(
        `${Server_IP}/mentors/${mentor.id}/likes/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        alert(response.data);
        setLike((prevMentors) =>
          prevMentors.map((m) =>
            m.id === mentor.id ? { ...m, is_subscribed: !m.is_subscribed } : m
          )
        );
      })
      .catch((error) => {
        console.log(error);
        // console.log(mentor.mentor_id);
        alert("멘토 관심 설정에 실패하였습니다.");
      });
  };

  return (
    <>
      {like.map((mentor, idx) => (
        <Wrapper key={idx}>
          <Both onClick={() => navigate(`/profile/mentor/${mentor.user}`)}>
            <Left>
              <Profile src={ChatMentor} alt="ChatMentor" />
            </Left>

            <Right>
              <Username>{mentor.mentor_name}</Username>
              {mentor.interests_display.map((interest, idx) => (
                <CategoryBox key={idx}>
                  <Category>{interest.name}</Category>
                </CategoryBox>
              ))}
            </Right>
          </Both>
          <SubscribeBox>
            <SubBtn
              src={mentor.is_subscribed ? FollowGray : FollowYellow}
              alt={mentor.is_subscribed ? "Following" : "Follow"}
              onClick={() => postLike(mentor)}
            />
          </SubscribeBox>
        </Wrapper>
      ))}
    </>
  );
};

export default InterestMentee;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 40px;
  justify-content: space-between;
`;

const Both = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
`;

const Left = styled.div``;

const Right = styled.div``;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;

const Username = styled.div`
  color: #494949;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
`;

const CategoryBox = styled.div`
  display: inline-flex;
`;

const Category = styled.div`
  background: #fdde55;
  padding: 4px 10px;
  border-radius: 30px;
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-right: 6px;
`;

const SubscribeBox = styled.div`
  display: flex;
  padding-top: 5px;
`;

const SubBtn = styled.img`
  cursor: pointer;
  width: 20px;
  height: 26px;
`;
