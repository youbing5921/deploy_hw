import React from "react";
import styled from "styled-components";

const SearchCard = ({ txt, subtxt, onBtnClick, $fontColor, $bgimg }) => {
  return (
    <SearchCardBtn onClick={onBtnClick} $bgimg={$bgimg}>
      <Title $fontColor={$fontColor}>{txt}</Title>
      <SubTitle $fontColor={$fontColor}>{subtxt}</SubTitle>
    </SearchCardBtn>
  );
};

export default SearchCard;

const SearchCardBtn = styled.div`
  background-image: url(${(props) => (props.$bgimg ? props.$bgimg : "")});
  border: none;
  width: 248px;
  height: 409.624px;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 9px;
  color: ${(props) => props.$fontColor || "#494949"};
`;

const SubTitle = styled.div`
  white-space: pre-line;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: ${(props) => props.$fontColor || "#494949"};
`;
