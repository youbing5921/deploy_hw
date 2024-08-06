import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const is_mentor = localStorage.getItem("is_mentor") === "true";
const Server_IP = process.env.REACT_APP_Server_IP;

const CommunityContainer = ({
  communityList,
  forSpecialMentor,
  mentor_name,
}) => {
  const accessToken = localStorage.getItem("access");
  const navigate = useNavigate();

  const onClick = (column) => {
    navigate(`/community/${column.id}`, {
      state: {
        column: column,
      },
    });
  };

  const toggleScraption = (e, id) => {
    e.stopPropagation();
    sendScrapInfo(id);
  };

  function sendScrapInfo(id) {
    axios
      .post(`${Server_IP}/community/columns/${id}/scrap/`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        // console.log(response.data);
        // console.log("스크랩 결과", response.data.is_scraped);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  }

  return (
    <ListContainer>
      <ForSpecialMentor style={{ display: forSpecialMentor ? "flex" : "none" }}>
        <img src="/img/MenteeImage.svg" alt="멘토 이미지" />
        <p>{mentor_name}</p>
        <img src="/img/x.svg" alt="x" onClick={() => navigate(-1)} />
      </ForSpecialMentor>
      {communityList.map((column) => (
        <ColumnBox key={column.id} onClick={() => onClick(column)}>
          <Profile
            src={column.image ? column.image : "/img/communitySampleImage.svg"}
          />
          <Content>
            <Category
              style={{
                backgroundColor: forSpecialMentor
                  ? "rgba(253, 222, 85, 0.20)"
                  : null,
              }}
            >
              {column.categories[0].name}
            </Category>
            <Title>{column.title}</Title>
            <Username>{mentor_name}</Username>
          </Content>
          <SubscribeButton onClick={(e) => toggleScraption(e, column.id)}>
            <img
              src={`/img/${
                column.is_scraped
                  ? is_mentor
                    ? "MentorStar"
                    : "MenteeStar"
                  : "EmptyStar"
              }.svg`}
              alt={column.is_scraped ? "Following" : "NotFollow"}
            />
          </SubscribeButton>
        </ColumnBox>
      ))}
    </ListContainer>
  );
};

export default CommunityContainer;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.5px;
  padding: 0px 40px 25px 40px;
  margin-top: 180px;
  margin-bottom: ${is_mentor ? "110px" : "0px"};
`;

const ForSpecialMentor = styled.div`
  width: 490px;
  height: 40px;
  padding: 18px 14px;
  background-color: #f8f8f8;
  border-radius: 15px;
  img:nth-child(1) {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
  p {
    margin: auto 0;
    color: #494949;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img:nth-child(3) {
    width: 25px;
    height: 25px;
    margin: auto 0 auto auto;
    cursor: pointer;
  }
`;

const ColumnBox = styled.div`
  border-radius: 20px;
  background: #f8f8f8;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Profile = styled.img`
  width: 129px;
  height: 94px;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Category = styled.div`
  display: flex;
  padding: 3px 9px;
  width: fit-content;
  border-radius: 20px;
  background: ${is_mentor
    ? "rgba(3, 174, 210, 0.2)"
    : "rgba(253, 222, 85, 0.20)"};
  color: ${is_mentor ? "#03aed2" : "#FFD000"};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Username = styled.div`
  color: #494949;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubscribeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 8.5px 7px auto auto;
  img {
    width: 20px;
    height: 20px;
  }
`;
