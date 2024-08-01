import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";

const initCommunityList = [
  {
    id: 1,
    imgSrc: "images/communitySampleImage.svg",
    isSubscribed: true,
    category: "가치관",
    title: "단 한 번뿐인 인생, 도전하라",
    writer: "김조이",
    writerCategory: ["가치관", "사랑", "인간관계"],
    date: "2024.07.31",
    mainText:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
];

const CommunityPage = () => {
  const [communityList, setCommunityList] = useState(initCommunityList);
  const column = initCommunityList[0];

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
      </TopContainer>
      <Column></Column>
      <WriterInfo>
        <Text>
          <WriterName>{column.writer}</WriterName>
          <CategoryList>
            {column.writerCategory.map((value, idx) => (
              <WriterCategory key={idx}>{value}</WriterCategory>
            ))}
          </CategoryList>
        </Text>
        <WriterImg />
      </WriterInfo>
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

const Column = styled.div`
  min-height: 971px;
`;

const WriterInfo = styled.footer`
  display: flex;
  width: 520px;
  height: 128px;
  padding: 10px 40px 30px 40px;
  margin-top: auto;
  background-color: rgba(73, 73, 73, 0.2);
  img {
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const WriterName = styled.p`
  color: #494949;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.66px;
  margin: 0;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 15px;
`;

const WriterCategory = styled.div``;

const WriterImg = styled.img.attrs({
  src: "/img/MentorImage.svg",
})`
  width: 125px;
  height: 125px;
  margin: -47px -3px 0 auto;
`;
