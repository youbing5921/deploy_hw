import React from "react";
import styled from "styled-components";

const SearchCard = ({ onBtnClick }) => {
  return (
    <SearchCardBtn onClick={onBtnClick}>
      <Title>멘티 돕기</Title>
      <SubTitle>
        멘토님들의 소중한 <br />
        조언을 기다리고 있어요!
      </SubTitle>
    </SearchCardBtn>
  );
};

export default SearchCard;

const SearchCardBtn = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/mentorBtn1.svg"});
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
  color: #fff;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 9px;
`;

const SubTitle = styled.div`
  width: 224px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;
