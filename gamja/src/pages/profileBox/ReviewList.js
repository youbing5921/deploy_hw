import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import xBtn from "../../images/xBtn.svg";
import axios from "axios";

const ReviewList = () => {
  const accessToken = localStorage.getItem("access");
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(`http://127.0.0.1:8000/profile/${userId}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(userId);
          console.log(error);
        });
    };
    getProfile();
  }, [accessToken, userId]);

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
