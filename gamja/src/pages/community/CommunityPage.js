import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import CategoryBar from "../../components/community/CategoryBar";
import CommunityContainer from "../../components/community/CommunityContainer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CommunityPage = () => {
  const navigate = useNavigate();
  const [communityList, setCommunityList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [filteredCategory, setFilteredCategory] = useState(communityList);
  const accessToken = localStorage.getItem("access");
  const is_mentor = localStorage.getItem("is_mentor") === "true";
  const location = useLocation();
  const forSpecialMentor = location.pathname.includes("mentor");
  const mentor_id = forSpecialMentor ? location.state.mentor_id : 0;
  const mentor_name = forSpecialMentor ? location.state.mentor_name : "";

  useEffect(
    () =>
      setFilteredCategory(
        communityList.filter(
          (column) =>
            selectedCategory === "전체" ||
            column.categories[0].name === selectedCategory
        )
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedCategory]
  );

  // 서버에서 칼럼 목록 불러오기
  useEffect(() => {
    const uri = forSpecialMentor ? `/mentor/?mentor_id=${mentor_id}` : `/`;
    axios
      .get(`http://127.0.0.1:8000/community/columns${uri}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setCommunityList(response.data);
        setFilteredCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"커뮤니티"} onClick={() => navigate("/home")} />
        <CategoryBar onSelectCategory={setSelectedCategory} />
      </TopContainer>
      <CommunityContainer
        communityList={filteredCategory.reverse()}
        forSpecialMentor={forSpecialMentor}
        mentor_name={mentor_name}
      />
      {is_mentor ? (
        <WriteCol>
          <button onClick={() => navigate("/community/write")}>
            칼럼 작성하기
          </button>
        </WriteCol>
      ) : null}
    </Container>
  );
};

export default CommunityPage;

const Container = styled.div`
  background-color: #ededed;
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
  width: 600px;
  position: fixed;
  top: 0;
  margin-bottom: 28px;
`;

const WriteCol = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 600px;
  height: 107px;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
  button {
    border-radius: 15px;
    background: #03aed2;
    width: 229px;
    height: 53px;
    border: 0;
    cursor: pointer;

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
