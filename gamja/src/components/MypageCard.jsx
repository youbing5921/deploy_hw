import React from "react";
import styled from "styled-components";

const MypageCard = ({ onBtnClick }) => {
  return (
    <MypageCardBtn onClick={onBtnClick}>
      <Title>마이페이지</Title>
      <SubTitle>
        내 정보를 확인하고 <br />
        수정할 수 있어요!
      </SubTitle>
    </MypageCardBtn>
  );
};

export default MypageCard;

const MypageCardBtn = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/mypage.svg"});
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
  width: 152px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;
