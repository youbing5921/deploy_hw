import React from "react";
import styled from "styled-components";
import SearchBtnImg from "../../images/SearchBtn.png";
import OutBtnImg from "../../images/OutBtn.svg";
import TopBar from "../../components/common/TopBar";

const ChatRoom = () => {
  return (
    <>
      <Container>
        <TopBar txt={"채팅하기"} />
        <Title>
          <RoomName>진로를 선택할 때 가장 중요한 기준</RoomName>
          <ButtonContainer>
            <Icon src={SearchBtnImg} alt="Search" />
            <Icon src={OutBtnImg} alt="Out" />
          </ButtonContainer>
        </Title>
      </Container>
    </>
  );
};

export default ChatRoom;

const Container = styled.div``;

const Title = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
`;

const RoomName = styled.div`
  color: #7f7f7f;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 37.5px */
  letter-spacing: -0.55px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 29px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
