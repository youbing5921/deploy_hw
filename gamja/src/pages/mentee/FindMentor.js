import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import CategoryBar from "../../components/common/CategoryBar";
import MentorInfo from "../../components/mentee/MentorInfo";

let allInfoList = [
  {
    id: "1",
    name: "척척육은영",
    isSubscribed: false,
    category1: "가치관",
    count1: "10",
    category2: "사랑",
    count2: "10",
    category3: "생활",
    count3: "2",
    rating: "50",
  },
  {
    id: "2",
    name: "척척육은영",
    isSubscribed: false,
    category1: "인간관계",
    count1: "15",
    category2: "재테크",
    count2: "10",
    category3: "가치관",
    count3: "20",
    rating: "65",
  },
  {
    id: "3",
    name: "척척육은영",
    isSubscribed: true,
    category1: "인간관계",
    count1: "15",
    category2: "재테크",
    count2: "2",
    category3: "가치관",
    count3: "20",
    rating: "35",
  },
  {
    id: "4",
    name: "척척육은영",
    isSubscribed: false,
    category1: "인간관계",
    count1: "15",
    category2: "재테크",
    count2: "10",
    category3: "진로",
    count3: "20",
    rating: "30",
  },
  {
    id: "5",
    name: "척척육은영",
    isSubscribed: false,
    category1: "인간관계",
    count1: "15",
    category2: "재테크",
    count2: "10",
    category3: "진로",
    count3: "20",
    rating: "30",
  },
  {
    id: "6",
    name: "척척육은영",
    isSubscribed: false,
    category1: "인간관계",
    count1: "15",
    category2: "재테크",
    count2: "10",
    category3: "진로",
    count3: "20",
    rating: "30",
  },
  {
    id: "7",
    name: "척척육은영",
    isSubscribed: false,
    category1: "인간관계",
    count1: "15",
    category2: "재테크",
    count2: "10",
    category3: "진로",
    count3: "20",
    rating: "30",
  },
];

const FindMentor = () => {
  const [infoList, setInfoList] = useState(allInfoList);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const toggleSubscription = (id) => {
    setInfoList((prevInfoList) =>
      prevInfoList.map((mentor) =>
        mentor.id === id
          ? { ...mentor, isSubscribed: !mentor.isSubscribed }
          : mentor
      )
    );
  };

  const filteredInfos = infoList.filter(
    (info) =>
      selectedCategory === "전체" ||
      info.category1 === selectedCategory ||
      info.category2 === selectedCategory ||
      info.category3 === selectedCategory
  );

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"멘토 찾기"} />
        <CategoryBar onSelectCategory={setSelectedCategory} />
      </TopContainer>
      <InfoBox>
        <MentorInfo
          infoList={filteredInfos}
          toggleSubscription={toggleSubscription}
        />
      </InfoBox>
      <BottomBar>
        <AutoMatch>자동 매칭하기</AutoMatch>
      </BottomBar>
    </Container>
  );
};

export default FindMentor;

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

const InfoBox = styled.div`
  padding: 0px 40px 150px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 24px;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 600px;
  height: 107px;
  background: #f8f8f8;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
  justify-content: center;
  align-items: center;
  display: flex;
`;

const AutoMatch = styled.button`
  display: flex;
  width: 259px;
  height: 53px;
  justify-content: center;
  align-items: center;
  color: #fdde55;
  font-size: 20px;
  font-weight: 700;
  border-radius: 15px;
  background: #494949;
  border: none;
`;
