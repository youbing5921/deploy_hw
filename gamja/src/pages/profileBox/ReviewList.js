import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import xBtn from "../../images/xBtn.svg";
import axios from "axios";
import backProfile from "../../images/backProfile.svg";
import MoreReview from "../../components/profileBox/MoreReview";
import InterestBtn from "../../components/profileBox/InterestBtn";
import ChatBtn from "../../components/profileBox/ChatBtn";

const Server_IP = process.env.REACT_APP_Server_IP;

const ReviewList = () => {
  const accessToken = localStorage.getItem("access");
  const { mentorId } = useParams();
  const navigate = useNavigate();
  const [Info, setInfo] = useState([]);
  const [reviewId, setReviewId] = useState([]);

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(`${Server_IP}/profile/${mentorId}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setInfo(response.data);
          setReviewId(response.data?.info?.id);
        })
        .catch((error) => {
          // console.log(mentorId);
          console.log(error);
        });
    };

    getProfile();
  }, [accessToken, mentorId]);

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
          <TitleBox>
            <BackButton src={backProfile} onClick={() => navigate(-1)} />
            <Title>멘토님의 멘토링 후기</Title>
          </TitleBox>
          <ReviewBox>
            <MoreReview reviewId={reviewId} />
          </ReviewBox>
          <BtnBox>
            <InterestBtn Info={Info} />
            <ChatBtn mentorId={Info.info?.id} Info={Info} />
          </BtnBox>
        </MentorBox>
      </Container>
    </>
  );
};

export default ReviewList;

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

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 33.5px;
`;
const BackButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const Title = styled.div`
  color: #494949;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`;
const ReviewBox = styled.div`
  margin-top: 13.5px;
  border-radius: 15px;
  display: flex;
  width: 339px;
  height: 365px;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BtnBox = styled.div`
  margin-top: 23px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
