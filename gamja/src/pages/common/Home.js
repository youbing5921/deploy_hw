import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteSection from "../../components/common/QuoteSection";
import SearchCard from "../../components/common/SearchCard";
import ChatCard from "../../components/common/ChatCard";
import CommunityCard from "../../components/common/CommunityCard";
import MypageCard from "../../components/common/MypageCard";
import mentorBtn1 from "../../images/mentorBtn1.svg";
import menteeBtn1 from "../../images/menteeBtn1.svg";
import mentorBtn2 from "../../images/mentorBtn2.svg";
import menteeBtn2 from "../../images/menteeBtn2.svg";
import mentorBtn3 from "../../images/mentorBtn3.svg";
import menteeBtn3 from "../../images/menteeBtn3.svg";
import mentorBtn4 from "../../images/mentorBtn4.svg";
import menteeBtn4 from "../../images/menteeBtn4.svg";

const Home = () => {
  const navigate = useNavigate();
  const userType = "mentee";
  return (
    <>
      {userType === "mentor" ? (
        <>
          <LogoBar>
            <LogoImg
              src={process.env.PUBLIC_URL + "/img/mentorLogo.svg"}
              alt="로고이미지"
              onClick={() => navigate("/home")}
            />
          </LogoBar>
          <Container>
            <QuoteSection />
            <Cards>
              <SearchCard
                txt={"멘티 돕기"}
                subtxt={"멘토님들의 소중한 \n조언을 기다리고 있어요!"}
                fontColor={"#fff"}
                bgImg={mentorBtn1}
                onBtnClick={() => navigate("/concerns")}
              />
              <ChatCard txt={"멘티"} fontColor={"#fff"} bgImg={mentorBtn2} />
              <CommunityCard fontColor={"#fff"} bgImg={mentorBtn3} />
              <MypageCard fontColor={"#fff"} bgImg={mentorBtn4} />
            </Cards>
          </Container>
        </>
      ) : (
        <>
          <LogoBar>
            <LogoImg
              src={process.env.PUBLIC_URL + "/img/menteeLogo.svg"}
              alt="로고이미지"
              onClick={() => navigate("/home")}
            />
          </LogoBar>
          <Container>
            <QuoteSection />
            <Cards>
              <SearchCard
                txt={"멘토 찾기"}
                subtxt={
                  "든든한 멘토님들이 당신의 \n고민해결을 위해 모였습니다!"
                }
                bgImg={menteeBtn1}
                onBtnClick={() => navigate("/find")}
              />
              <ChatCard txt={"멘토"} bgImg={menteeBtn2} />
              <CommunityCard bgImg={menteeBtn3} />
              <MypageCard bgImg={menteeBtn4} />
            </Cards>
          </Container>
        </>
      )}
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

const Container = styled.div`
  padding: 40px;
`;

const Cards = styled.div`
  padding-top: 109px;
  display: grid;
  grid-template-columns: repeat(2, 248px);
  gap: 23px;
`;
