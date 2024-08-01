import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import CategoryBar from "../../components/community/CategoryBar";
import CommunityContainer from "../../components/community/CommunityContainer";

const initCommunityList = [
  {
    id: 1,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: true,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 2,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 3,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 4,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 5,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 6,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 7,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
  {
    id: 8,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: false,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
];

const CommunityPage = () => {
  const [communityList, setCommunityList] = useState(initCommunityList);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredCategory = communityList.filter(
    (column) =>
      selectedCategory === "전체" || column.category === selectedCategory
  );

  const toggleSubscription = (id) => {
    setCommunityList((prevCommunityList) =>
      prevCommunityList.map((column) =>
        column.id === id
          ? { ...column, isSubscribed: !column.isSubscribed }
          : column
      )
    );
  };

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"커뮤니티"} />
        <CategoryBar onSelectCategory={setSelectedCategory} />
      </TopContainer>
      <CommunityContainer
        communityList={filteredCategory}
        toggleSubscription={toggleSubscription}
      />
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
`;
