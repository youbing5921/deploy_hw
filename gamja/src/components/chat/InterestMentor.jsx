import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatMentor from "../../images/ChatMentor.svg";
import FollowYellow from "../../images/FollowYellow.svg";
import FollowGray from "../../images/FollowGray.svg";
import { useNavigate } from "react-router-dom";

const InterestMentee = ({ interestList }) => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const initialSubscriptions = [];
    interestList.forEach((mentor) => {
      initialSubscriptions[mentor.id] = mentor.is_subscribe;
    });
    setSubscriptions(initialSubscriptions);
  }, [interestList]);

  const onSubscribe = (id) => {
    setSubscriptions((prevSubscriptions) => ({
      ...prevSubscriptions,
      [id]: !prevSubscriptions[id],
    }));
  };

  return (
    <>
      {interestList.map((mentor) => (
        <Wrapper key={mentor.id}>
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
