import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MainContainer from "../../components/categoryAndMatching/MainContainer";
import BackBtn from "../../components/categoryAndMatching/BackBtn";
import TitleOval from "../../components/categoryAndMatching/TitleOval";
import BottonBtn from "../../components/categoryAndMatching/BottonBtn";
import MentorReco from "../../components/matching/MentorReco";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const Matching = () => {
  const navigate = useNavigate();
  const category = useLocation().state.category;
  const [mentorInfo, setMentorInfo] = useState([]);
  const accessToken = localStorage.getItem("access");

  const chat = () => {
    const mentor_id = document
      .querySelector("#mentorContainer")
      .getAttribute("data-key");
    navigate(`/chat-create/mentee/${mentor_id}`);
  };

  useEffect(() => {
    axios
      .post(
        `${Server_IP}/matching/`,
        {
          interests: category,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        setMentorInfo(response.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function likeMentor() {
    const name = document.querySelector("#mentorName").innerText;
    // console.log(name);
    mentorInfo.map((mentor) => {
      if (mentor.name === name) {
        const id = mentor.info.id;
        axios
          .post(`${Server_IP}/mentors/${id}/likes/`, null, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => alert(response.data))
          .catch((error) => console.log(error));
      }
    });
  }

  if (mentorInfo.length === 0) {
    return <></>;
  } else {
    return (
      <MainContainer>
        <BackBtn onClick={() => navigate(-1)} />
        <NewTitleOval>멘토 매칭</NewTitleOval>
        <TitleText>
          {localStorage.getItem("name").substring(1)}님이 찾던
          <br />
          멘토님을 소개해드릴게요.
        </TitleText>
        <MentorReco infoList={mentorInfo} />
        <BtnDiv>
          <NewBottonBtn onClick={likeMentor}>관심멘토로 설정하기</NewBottonBtn>
          <NewBottonBtn1 onClick={chat}>멘토님께 채팅하기</NewBottonBtn1>
        </BtnDiv>
        <HorizonLine text="홈으로 이동하기" onClick={() => navigate("/home")} />
      </MainContainer>
    );
  }
};

export default Matching;

const NewTitleOval = styled(TitleOval)`
  background-color: #7f7f7f;
`;

const TitleText = styled.div`
  color: #494949;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 30px;
`;

const BtnDiv = styled.div`
  display: flex;
  gap: 24px;
`;

const NewBottonBtn = styled(BottonBtn)`
  background: #7f7f7f;
  width: 248px;
  font-size: 23px;
  padding: 0px;
`;

const NewBottonBtn1 = styled(NewBottonBtn)`
  background-color: #494949;
`;

const HorizonLine = ({ text, bold, onClick }) => {
  return (
    <div
      style={{
        width: "474px",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "36px auto 53px auto",
        color: "#494949",
      }}
    >
      <span
        style={{
          background: "#f8f8f8",
          padding: "0 10px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {text}
        <b>{bold}</b>
      </span>
    </div>
  );
};
