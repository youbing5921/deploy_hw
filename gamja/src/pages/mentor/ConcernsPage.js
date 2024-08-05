import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import CategoryBar from "../../components/common/CategoryBar";
import Concern from "../../components/mentor/Concern";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const ConcernsPage = () => {
  const [concernList, setConcernList] = useState([]);
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    const getMenteeConcern = () => {
      axios
        .get(`${Server_IP}/concerns/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setConcernList(response.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getMenteeConcern();
  }, [accessToken]);

  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredConcerns = concernList?.filter(
    (concern) =>
      selectedCategory === "전체" ||
      concern.interests.some((interest) => interest.name === selectedCategory)
  );

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"멘티 돕기"} />
        <CategoryBar onSelectCategory={setSelectedCategory} />
      </TopContainer>
      <ConcernBox>
        <Concern concernList={filteredConcerns} />
      </ConcernBox>
    </Container>
  );
};

export default ConcernsPage;

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
`;

const ConcernBox = styled.div`
  padding: 0px 40px 25px 40px;
`;
