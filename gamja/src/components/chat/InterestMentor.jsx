import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatMentor from "../../images/ChatMentor.svg";
import FollowYellow from "../../images/FollowYellow.svg";
import FollowGray from "../../images/FollowGray.svg";
import { useNavigate } from "react-router-dom";

const mentorList = [
  {
    id: 1,
    username: "나왕똑똑",
    Category: ["가치관", "사랑", "인간관계"],
    is_subscribe: true,
  },
  {
    id: 2,
    username: "나좀똑똑",
    Category: ["생활지식", "재테크", "인간관계"],
    is_subscribe: false,
  },
  {
    id: 3,
    username: "나덜똑똑",
    Category: ["진로", "사랑", "인간관계"],
    is_subscribe: false,
  },
  {
    id: 4,
    username: "나개똑똑",
    Category: ["가치관", "사랑", "인간관계"],
    is_subscribe: true,
  },
];

const InterestMentee = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const initialSubscriptions = [];
    mentorList.forEach((mentor) => {
      initialSubscriptions[mentor.id] = mentor.is_subscribe;
    });
    setSubscriptions(initialSubscriptions);
  }, []);

  const onSubscribe = (id) => {
    setSubscriptions((prevSubscriptions) => ({
      ...prevSubscriptions,
      [id]: !prevSubscriptions[id],
    }));
  };

  return (
    <>
      {mentorList.map((mentor) => (
        <Wrapper key={mentor.id}>
          <Both onClick={() => navigate(`/profile/mentor/${mentor.username}`)}>
            <Left>
              <Profile src={ChatMentor} alt="ChatMentor" />
            </Left>

            <Right>
              <Username>{mentor.username}</Username>
              {mentor.Category.map((cat, idx) => (
                <CategoryBox key={idx}>
                  <Category>{cat}</Category>
                </CategoryBox>
              ))}
            </Right>
          </Both>
          <SubscribeBox>
            <SubBtn
              src={subscriptions[mentor.id] ? FollowYellow : FollowGray}
              onClick={() => onSubscribe(mentor.id)}
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
  padding-top: 5px;
`;

const SubBtn = styled.img`
  cursor: pointer;
  width: 20px;
  height: 26px;
`;
