import React from "react";
import styled from "styled-components";

const CommunityCard = ({ onBtnClick }) => {
  return (
    <CommunityCardBtn onClick={onBtnClick}>
      <Title>커뮤니티</Title>
      <SubTitle>
        망망대해를 함께 항해하는
        <br />
        보이저들과 이야기 공유해요!
      </SubTitle>
    </CommunityCardBtn>
  );
};

export default CommunityCard;

const CommunityCardBtn = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/community.svg"});
  border: none;
  width: 248px;
  height: 380px;
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
  width: 180px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;
