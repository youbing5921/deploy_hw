import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import { useLocation, useParams } from "react-router-dom";

const CommunityPage = () => {
  const { colId } = useParams();
  const column = useLocation().state.column;
  const [communityList, setCommunityList] = useState(column);

  const toggleSubscription = () => {
    setCommunityList((prev) => ({
      ...prev,
      isSubscribed: !prev.isSubscribed,
    }));
  };

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"커뮤니티"} />
      </TopContainer>
      <Column>
        <Header>
          <ColTitle>
            {communityList.title}{" "}
            <ColCategory>{communityList.category}</ColCategory>
          </ColTitle>
          <ColInfo>
            by {communityList.writer} • {communityList.date}
            <SubscribeButton onClick={toggleSubscription}>
              <img
                src={`/img/${
                  communityList.isSubscribed ? "MentorStar" : "EmptyStar"
                }.svg`}
                alt={communityList.isSubscribed ? "Following" : "NotFollow"}
              />
            </SubscribeButton>
          </ColInfo>
        </Header>
        <HorizonLine />
        <MainText>{communityList.mainText}</MainText>
        <ColumnImg src={`/${communityList.imgSrc}`} />
      </Column>
      <WriterInfo>
        <Text>
          <WriterName>{communityList.writer}</WriterName>
          <CategoryList>
            {communityList.writerCategory.map((value, idx) => (
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
  background: rgba(3, 174, 210, 0.2);
  margin-left: auto;

  color: #03aed2;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ColInfo = styled.div`
  color: #494949;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.33px;
`;

const SubscribeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 8.5px 7px auto auto;
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
  background-color: rgba(73, 73, 73, 0.2);
`;

const Text = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
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

const WriterCategory = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background-color: #03aed2;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const WriterImg = styled.img.attrs({
  src: "/img/MentorImage.svg",
})`
  width: 125px;
  height: 125px;
  margin: -80px -3px 0 auto;
`;
