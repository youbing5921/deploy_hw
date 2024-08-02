import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import xBtn from "../../images/xBtn.svg";
import RateBox from "../../components/profileBox/RateBox";
import MentorHistory from "../../components/profileBox/MentorHistory";
import Review from "../../components/profileBox/Review";
import axios from "axios";

const MentorProfile = () => {
  const { mentorId } = useParams();
  console.log(mentorId);
  const navigate = useNavigate();
  const [Info, setInfo] = useState([]);
  console.log(Info);

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(`http://127.0.0.1:8000/profile/${mentorId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(mentorId);
          console.log(error);
        });
    };
    getProfile();
  }, [mentorId]);

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <MentorBox>
          <Top>
            <NameBox>
              <Left>
                <Profile src={MentorImg} />
              </Left>
              <Right>
                <Username>{Info.name}</Username>
                {Info.info?.interests_display.map((interest, idx) => (
                  <CategoryBox key={idx}>
                    <Category>{interest.name}</Category>
                  </CategoryBox>
                ))}
              </Right>
            </NameBox>
            <CloseBtn src={xBtn} onClick={onCancel} />
          </Top>
          <RatingBox>
            <Title>멘토님의 등대 지수</Title>
            <RateBox rating={Info.info?.rating} />
          </RatingBox>
          <HistoryBox>
            <Title>멘토님의 멘토링 내역</Title>
            <History>
              <MentorHistory Info={Info} />
            </History>
          </HistoryBox>
          <ReviewBox>
            <Title>멘토님의 멘토링 후기</Title>
            <Review></Review>
          </ReviewBox>
          <Button onClick={() => navigate("/chat-create/mentee/:roomId")}>
            멘토님과 채팅
          </Button>
        </MentorBox>
      </Container>
    </>
  );
};

export default MentorProfile;

const Container = styled.div`
  background: rgba(248, 248, 248, 0.85);
  margin: 0 auto;
  padding: 267px 86px;
`;
const MentorBox = styled.div`
  width: 360px;
  border-radius: 20px;
  background: linear-gradient(200deg, #fff8dd 0.49%, #fdde55 99.51%);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 26px 25px 48px 44px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Left = styled.div``;
const Right = styled.div``;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 14px;
`;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;
const Username = styled.div`
  color: #494949;
  font-size: 30px;
  font-weight: 500;
`;

const CloseBtn = styled.img`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
`;

const CategoryBox = styled.div`
  display: inline-flex;
`;
const Category = styled.div`
  padding: 5px 10px;
  border-radius: 20px;
  background: rgba(73, 73, 73, 0.2);
  margin-right: 10px;
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

const RatingBox = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-top: 33px;
`;
const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`;
const HistoryBox = styled.div`
  margin-top: 26px;
  margin-right: 20px;
  border-radius: 15px;
`;

const History = styled.div``;
const ReviewBox = styled.div`
  margin-top: 26px;
  margin-bottom: 33px;
`;

const Button = styled.button`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  background: #494949;
  border: none;
  padding: 10px 115px;
  cursor: pointer;
`;
