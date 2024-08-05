import React from "react";
import styled from "styled-components";
import MentorColumn from "../../images/MentorColumn.png";
import { useNavigate } from "react-router-dom";

// const columnList = [
//   {
//     id: 1,
//     category: "가치관",
//     title: "단 한 번뿐인 인생, 도전하라!",
//     author: "김조이",
//   },
//   {
//     id: 2,
//     category: "가치관",
//     title: "단 한 번뿐인 인생, 도전하라!",
//     author: "김조이",
//   },

//   {
//     id: 3,
//     category: "가치관",
//     title: "단 한 번뿐인 인생, 도전하라!",
//     author: "김조이",
//   },
//   {
//     id: 4,
//     category: "가치관",
//     title: "단 한 번뿐인 인생, 도전하라!",
//     author: "김조이",
//   },
// ];

const Column = ({ $categoryColor, $categoryBg, Info }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wapper>
        {Info.scrapedColumns?.map((colInfo, idx) => (
          <Container
            key={idx}
            onClick={() => navigate(`/community/${colInfo.id}`)}
          >
            <Photo src={MentorColumn} alt="mentorColumn" />
            <InfoBox>
              <Category
                $categoryColor={$categoryColor}
                $categoryBg={$categoryBg}
              >
                {colInfo.categories}
              </Category>
              <Title>{colInfo.title}</Title>
              <Author>{colInfo.author.name}</Author>
            </InfoBox>
          </Container>
        ))}
      </Wapper>
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
