import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const is_mentor = localStorage.getItem("is_mentor") === "true";

const CommunityPage = () => {
  const column = useLocation().state.column;
  const [communityList, setCommunityList] = useState(column);
  const accessToken = localStorage.getItem("access");
  const [scrap, setScrap] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const is_mentor = localStorage.getItem("is_mentor") === "true";
  const navigate = useNavigate();
  console.log("지금은?", communityList);

  const toggleScraption = () => {
    sendScrapInfo(communityList.id);
  };

  const toggleSubscribe = (e) => {
    e.stopPropagation();
    setSubscribe((prev) => !prev);
  };

  const showMentorProfile = () => {
    console.log("멘토 프로필 보여주기");
    console.log(typeof column.author.id);
    navigate(`/profile/mentor/${column.author.id}`);
  };

  function sendScrapInfo(id) {
    axios
      .post(`http://127.0.0.1:8000/community/columns/${id}/scrap/`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response.data);
        console.log("스크랩 결과", response.data.is_scraped);
        setCommunityList(response.data.column);
        setScrap(response.data.is_scraped);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const searchBtn = document.querySelector("#searchBtn");
    searchBtn.style.display = "none";
    axios
      .get(
        `http://127.0.0.1:8000/community/columns/${communityList.id}/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log("초기값", response.data);
        setCommunityList(response.data);
        console.log(response.data.is_scraped);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"커뮤니티"} />
      </TopContainer>
      <Column>
        <Header>
          <ColTitle>
            {communityList.title}
            <ColCategory>{communityList.categories[0].name}</ColCategory>
          </ColTitle>
          <ColInfo>
            <p>
              by {communityList.author.name} •{" "}
              {communityList.published_date.substr(0, 10)}
            </p>
            <ScraptionButton onClick={toggleScraption}>
              <img
                src={`/img/${scrap ? "MentorStar" : "EmptyStar"}.svg`}
                alt={scrap ? "scraping" : "notScraping"}
              />
            </ScraptionButton>
          </ColInfo>
        </Header>
        <HorizonLine />
        <MainText>{communityList.content}</MainText>
        {communityList.image ? (
          <ColumnImg src={`${communityList.image}`} />
        ) : null}
      </Column>
      <WriterInfo>
        <Text>
          <div>
            <WriterName onClick={is_mentor ? null : showMentorProfile}>
              {communityList.author.name}
            </WriterName>
            {is_mentor ? null : (
              <SubscribeButton onClick={toggleSubscribe}>
                <img
                  src={`/img/Follow${subscribe ? "Yellow" : "Gray"}.svg`}
                  alt={scrap ? "scraping" : "notScraping"}
                />
              </SubscribeButton>
            )}
          </div>
          <CategoryList>
            {communityList.author.mentor_profile.interests_display.map(
              (value, idx) => (
                <WriterCategory key={idx}>{value.name}</WriterCategory>
              )
            )}
          </CategoryList>
        </Text>
        <WriterImg onClick={is_mentor ? null : showMentorProfile} />
      </WriterInfo>
    </Container>
  );
};

export default CommunityPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  width: 600px;
  height: 1230px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopContainer = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
`;

const Column = styled.div`
  min-height: 971px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  padding: 10px 40px;
  gap: 30px;
`;

const ColTitle = styled.div`
  display: flex;
  align-items: center;
  color: #494949;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.66px;
`;

const ColCategory = styled.div`
  display: flex;
  height: 16px;
  padding: 8px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${is_mentor
    ? "rgba(3, 174, 210, 0.2)"
    : "rgba(253, 222, 85, 0.20)"};
  margin-left: auto;

  color: ${is_mentor ? "#03aed2" : "#FFD000"};
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ColInfo = styled.div`
  width: 520px;
  display: flex;
  p {
    margin: 0;
    color: #494949;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.33px;
  }
`;

const ScraptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: auto 7px auto auto;
  img {
    width: 20px;
    height: 20px;
  }
`;

const SubscribeButton = styled(ScraptionButton)`
  margin: auto 0 auto 15px;
  img {
    width: 15px;
  }
`;

const HorizonLine = styled.hr`
  width: 520px;
  height: 0.5px;
  border: 0;
  background-color: rgba(73, 73, 73, 0.5);
  margin-top: 26px;
  margin-bottom: 35px;
`;

const MainText = styled.p`
  margin: 0 40px;
  color: #7f7f7f;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.44px;
`;

const ColumnImg = styled.img`
  width: 520px;
  height: 379px;
  border-radius: 10px;
  margin: 35px auto 100px auto;
`;

const WriterInfo = styled.footer`
  display: flex;
  width: 520px;
  height: 87px;
  padding: 20px 40px 30px 40px;
  margin-top: auto;
  background-color: rgba(73, 73, 73, 0.1);
`;

const Text = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  div {
    display: flex;
  }
`;

const WriterName = styled.p`
  color: #494949;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.66px;
  margin: 0;
  cursor: ${is_mentor ? null : "pointer"};
`;

const CategoryList = styled.div`
  display: flex;
  gap: 15px;
`;

const WriterCategory = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background-color: ${is_mentor ? "#03aed2" : "#FDDE55"};

  color: ${is_mentor ? "#fff" : "#494949"};
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const WriterImg = styled.img.attrs({
  src: `/img/${is_mentor ? "Mentor" : "Mentee"}Image.svg`,
})`
  width: 125px;
  height: 125px;
  margin: -80px -3px 0 auto;
  cursor: ${is_mentor ? null : "pointer"};
`;
