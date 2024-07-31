import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import CategoryBar from "../../components/common/CategoryBar";
import Concern from "../../components/mentor/Concern";

const initConcernList = [
  {
    id: "1",
    name: "돈이 뭐길래",
    category1: "재테크",
    category2: "생활지식",
    category3: "인간관계",
    comment:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
  },
  {
    id: "2",
    name: "돈이 뭐길래",
    category1: "생활지식",
    category2: "가치관",
    category3: "사랑",
    comment:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
  },
  {
    id: "3",
    name: "돈이 뭐길래",
    category1: "사랑",
    category2: "생활지식",
    category3: "가치관",
    comment:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
  },
  {
    id: "4",
    name: "돈이 뭐길래",
    category1: "사랑",
    category2: "재테크",
    category3: "인간관계",
    comment:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
  },
  {
    id: "5",
    name: "돈이 뭐길래",
    category1: "사랑",
    category2: "재테크",
    category3: "인간관계",
    comment:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
  },
  {
    id: "6",
    name: "돈이 뭐길래",
    category1: "사랑",
    category2: "재테크",
    category3: "인간관계",
    comment:
      "사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도 괜찮을까요?",
  },
];

const ConcernsPage = () => {
  const [concernList, setConcernList] = useState(initConcernList);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredConcerns = concernList.filter(
    (concern) =>
      selectedCategory === "전체" ||
      concern.category1 === selectedCategory ||
      concern.category2 === selectedCategory ||
      concern.category3 === selectedCategory
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
