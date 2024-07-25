import React from "react";
import styled from "styled-components";
import SearchBtnImg from "../../images/SearchBtn.png";
import OutBtnImg from "../../images/OutBtn.svg";
import TopBar from "../../components/common/TopBar";
import Receiver from "../../components/chat/Receiver";
import Sender from "../../components/chat/Sender";
import InputMessage from "../../components/chat/InputMessage";

const ChatRoom = () => {
  return (
    <>
      <Container>
        <TopContainer>
          <TopBar txt={"채팅하기"} />
          <FuncBar>
            <RoomName>진로를 선택할 때 가장 중요한 기준</RoomName>
            <ButtonContainer>
              <Icon src={SearchBtnImg} alt="Search" />
              <Icon src={OutBtnImg} alt="Out" />
            </ButtonContainer>
          </FuncBar>
        </TopContainer>
        <MessageContainer>
          <Receiver />
          <Sender />
        </MessageContainer>
        <InputMessage />
      </Container>
    </>
  );
};

export default ChatRoom;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  height: 1230px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
`;

const FuncBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
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

const MessageContainer = styled.div`
  padding: 31px 40px 0px 29px;
  height: 927px;
`;
