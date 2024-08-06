import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Server_IP = process.env.REACT_APP_Server_IP;

const Column = ({ $categoryColor, $categoryBg, Info }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name");
  const hasScrap = Info?.length !== 0;

  return (
    <>
      {hasScrap ? (
        <Wapper>
          {Info?.map((colInfo, idx) => (
            <Container
              key={idx}
              onClick={() =>
                navigate(`/community/${colInfo.id}`, {
                  state: { column: Info[idx] },
                })
              }
            >
              <Photo
                src={
                  colInfo.image
                    ? `${Server_IP}/${colInfo.image}`
                    : "/img/communitySampleImage.svg"
                }
                alt="mentorColumn"
              />
              <InfoBox>
                <Category
                  $categoryColor={$categoryColor}
                  $categoryBg={$categoryBg}
                >
                  {colInfo.categories[0].name}
                </Category>
                <Title>{colInfo.title}</Title>
                <Author>{colInfo.author.name}</Author>
              </InfoBox>
            </Container>
          ))}
        </Wapper>
      ) : (
        <BlankContainer>
          <BlankText>
            커뮤니티에서 {username}님께 도움이 될만한 칼럼을 스크랩해 보세요
          </BlankText>
        </BlankContainer>
      )}
    </>
  );
};

export default Column;

const Wapper = styled.div`
  display: flex;
  gap: 12px;
  max-width: 560px;
  padding-right: 40px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  width: 145px;
  padding: 12px 12px 20px 12px;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  background: #f8f8f8;
  margin-top: 17px;
  cursor: pointer;
`;

const Photo = styled.img`
  width: 145px;
  height: 93px;
  border-radius: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
const Category = styled.div`
  padding: 3px 9px;
  border-radius: 9px;
  background: ${(props) => props.$categoryBg || "rgba(3, 174, 210, 0.2)"};
  color: ${(props) => props.$categoryColor || "#03aed2"};
  text-align: center;
  font-size: 8px;
  font-weight: 400;
`;
const Title = styled.div`
  color: #494949;
  font-size: 15px;
  font-weight: 600;
`;
const Author = styled.div`
  color: #a4a4a4;
  font-size: 10px;
  font-weight: 500;
`;

const BlankContainer = styled.div`
  margin-top: 17px;
  border-radius: 15px;
  background: #f8f8f8;
  padding: 25px 20px;
  width: 480px;
`;
const BlankText = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
`;
