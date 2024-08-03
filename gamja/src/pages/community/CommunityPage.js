import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import CategoryBar from "../../components/community/CategoryBar";
import CommunityContainer from "../../components/community/CommunityContainer";
import axios from "axios";

const CommunityPage = () => {
  const [communityList, setCommunityList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [filteredCategory, setFilteredCategory] = useState(communityList);

  useEffect(
    () =>
      setFilteredCategory(
        communityList.filter(
          (column) =>
            selectedCategory === "전체" ||
            column.categories[0].name === selectedCategory
        )
      ),
    [selectedCategory]
  );

  const toggleScraption = (e, id) => {
    e.stopPropagation();
    let copiedList = [...communityList];
    copiedList[id - 1].is_scraped = !copiedList[id - 1].is_scraped;
    setCommunityList(copiedList);
    sendScrapInfo(id);
  };

  function sendScrapInfo(id) {
    axios
      .post(`http://127.0.0.1:8000/community/columns/${id}/scrap/`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  // 서버에서 칼럼 목록 불러오기
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/community/columns/`)
      .then((response) => {
        setCommunityList(response.data);
        setFilteredCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 칼럼 데이터 넣기
  // axios
  //   .post(
  //     `http://127.0.0.1:8000/community/columns/`,
  //     {
  //       title: "어쩌구저쩌구",
  //       content: "슈어아후나ㅓ루ㅏ누라ㅜ자ㅓ두라주라ㅜ",
  //       image: null,
  //       categories: [1, 3],
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("access")}`,
  //       },
  //     }
  //   )
  //   .then((response) => console.log(response.data))
  //   .catch((error) => console.log(error));

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"커뮤니티"} />
        <CategoryBar onSelectCategory={setSelectedCategory} />
      </TopContainer>
      <CommunityContainer
        communityList={filteredCategory}
        toggleScraption={toggleScraption}
      />
      <WriteCol>
        <button>칼럼 작성하기</button>
      </WriteCol>
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

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
