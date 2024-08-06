import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const is_mentor = localStorage.getItem("is_mentor") === "true";
const Server_IP = process.env.REACT_APP_Server_IP;

const CommunityPage = () => {
  const receivedColumn = useLocation().state.column;
  const [column, setColumn] = useState(receivedColumn);
  const accessToken = localStorage.getItem("access");
  const [scrap, setScrap] = useState(false);
  const is_mentor = localStorage.getItem("is_mentor") === "true";
  const myColumn =
    parseInt(localStorage.getItem("user_id")) ===
    column.author.mentor_profile.user;
  const existImg =
    column.image !== `${Server_IP}/media/column_images/voyage_default.png` &&
    column.image !== null;
  const navigate = useNavigate();

  const toggleScraption = () => {
    sendScrapInfo(column.id);
  };

  const showMentorProfile = () => {
    navigate(`/profile/mentor/${receivedColumn.author.id}`);
  };

  const modifyCol = () => {
    if (!window.confirm("칼럼을 수정하시겠습니까?")) {
      return;
    } else {
      navigate("/community/modify", { state: { column_id: column.id } });
    }
  };

  function deleteCol() {
    if (!window.confirm("칼럼을 지우시겠습니까?")) {
      return;
    } else {
      axios
        .delete(`${Server_IP}/community/columns/${column.id}/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          // console.log(response);
          navigate("/community");
        })
        .catch((error) => console.log(error));
    }
  }

  function sendScrapInfo(id) {
    axios
      .post(`${Server_IP}/community/columns/${id}/scrap/`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        // console.log(response.data);
        // console.log("스크랩 결과", response.data.is_scraped);
        setColumn(response.data.column);
        setScrap(response.data.is_scraped);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const searchBtn = document.querySelector("#searchBtn");
    searchBtn.style.display = "none";
    axios
      .get(`${Server_IP}/community/columns/${column.id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setColumn(response.data);
        setScrap(response.data.is_scraped);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"커뮤니티"} onClick={() => navigate("/community")} />
      </TopContainer>
      <Column>
        <Header>
          <ColTitle>
            {column.title}
            <ColCategory>{column.categories[0].name}</ColCategory>
          </ColTitle>
          <ColInfo>
            <p>
              by {column.author.name} • {column.published_date.substr(0, 10)}
            </p>
            <ScraptionButton onClick={toggleScraption}>
              <img
                src={`/img/${
                  scrap
                    ? is_mentor
                      ? "MentorStar"
                      : "MenteeStar"
                    : "EmptyStar"
                }.svg`}
                alt={scrap ? "scraping" : "notScraping"}
              />
            </ScraptionButton>
          </ColInfo>
        </Header>
        <HorizonLine />
        <MainText>{column.content}</MainText>
        {existImg ? <ColumnImg src={`${column.image}`} /> : null}
        <BtnContainer>
          <ModifyBtn
            onClick={modifyCol}
            style={{ display: myColumn ? "flex" : "none" }}
          />
          <DeleteBtn
            onClick={deleteCol}
            style={{ display: myColumn ? "flex" : "none" }}
          />
        </BtnContainer>
      </Column>
      <WriterInfo>
        <Text>
          <WriterName onClick={is_mentor ? null : showMentorProfile}>
            {column.author.name}
          </WriterName>
          <CategoryList>
            {column.author.mentor_profile.interests_display.map(
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
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
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
  font-family: Pretendard;
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
    font-family: Pretendard;
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
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.44px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 11px;
  margin: 18px 40px 100px auto;
`;

const ModifyBtn = styled.img.attrs({ src: "/img/columnModifyBtn.svg" })`
  width: 104px;
  height: 33px;
  border-radius: 20px;
  cursor: pointer;
`;

const DeleteBtn = styled(ModifyBtn).attrs({
  src: "/img/columnDeleteBtn.svg",
})``;

const ColumnImg = styled.img`
  width: 520px;
  border-radius: 10px;
  margin: 35px auto 0 auto;
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
  font-family: Pretendard;
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
