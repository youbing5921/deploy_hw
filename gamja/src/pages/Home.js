import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchCard from "../components/SearchCard";
import ChatCard from "../components/ChatCard";
import CommunityCard from "../components/CommunityCard";
import MypageCard from "../components/MypageCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <LogoBar onClick={() => navigate("/home")}>
        <LogoImg
          src={process.env.PUBLIC_URL + "/images/mentorLogo.svg"}
          alt="로고이미지"
        />
      </LogoBar>
      <Comment>
        가르치는 것은 <br /> 두 번 배우는 것이다
      </Comment>
      <Author>프랑스 수필가, 죠세프 수베르</Author>
      <Cards>
        <SearchCard />
        <ChatCard />
        <CommunityCard />
        <MypageCard />
      </Cards>
    </>
  );
};

export default Home;

const LogoBar = styled.div`
  padding: 20px 35px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

const Comment = styled.div`
  color: #494949;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 40px;
  margin-right: 225px;
`;

const Author = styled.div`
  color: #a4a4a4;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 40px;
  margin-top: 22px;
`;

const Cards = styled.div`
  padding: 109px 40px 38px 40px;
  display: grid;
  grid-template-columns: repeat(2, 248px);
  gap: 23px;
`;
