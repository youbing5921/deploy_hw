import React from "react";
import styled from "styled-components";
import clickedRecent from "../../images/clickedRecent.svg";
import clickedSuggest from "../../images/clickedSuggest.svg";
import recentIcon from "../../images/recentIcon.svg";
import suggestIcon from "../../images/suggestIcon.svg";

const ListMenuBar = ({ txt, selectedNav, onClickNav }) => {
  return (
    <>
      <Container>
        <NavBox
          onClick={() => onClickNav("recent")}
          $isActive={selectedNav === "recent"}
        >
          <NavIcon
            src={selectedNav === "recent" ? clickedRecent : recentIcon}
          />
          <NavText $isActive={selectedNav === "recent"}>
            최근 채팅한 목록
          </NavText>
        </NavBox>
        <MidHr />
        <NavBox
          onClick={() => onClickNav("suggest")}
          $isActive={selectedNav === "suggest"}
        >
          <NavIcon
            src={selectedNav === "suggest" ? clickedSuggest : suggestIcon}
          />
          <NavText $isActive={selectedNav === "suggest"}>
            {txt || "멘티의 제안 목록"}
          </NavText>
        </NavBox>
      </Container>
    </>
  );
};

export default ListMenuBar;

const Container = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 51px;
  padding: 10px 40px;
  justify-content: space-between;
  align-items: center;
`;

const NavBox = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  cursor: pointer;
`;

const MidHr = styled.hr`
  width: 2px;
  height: 30px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #494949;
  border: none;
`;

const NavIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const NavText = styled.div`
  color: ${(props) => (props.$isActive ? "#494949" : "#a4a4a4")};
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 37.5px */
  letter-spacing: -0.55px;
`;
