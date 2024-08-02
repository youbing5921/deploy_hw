import React from "react";
import styled from "styled-components";
import logoutBtn from "../../images/logoutBtn.svg";

const LogoutBtn = () => {
  return (
    <>
      <Button>
        로그아웃하기
        <Icon src={logoutBtn} alt="logoutIcon" />
      </Button>
    </>
  );
};

export default LogoutBtn;

const Button = styled.button`
  border-radius: 20px;
  background: rgba(73, 73, 73, 0.2);
  padding: 7px 15px;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 15px;
  height: 18px;
`;
