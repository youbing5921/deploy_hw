import React from "react";
import styled from "styled-components";
import SearchBtnImg from "../../images/SearchBtn.png";
import OutBtnImg from "../../images/OutBtn.svg";
import TopBar from "../../components/common/TopBar";
import Receiver from "../../components/chat/Receiver";
import Sender from "../../components/chat/Sender";
import InputMessage from "../../components/chat/InputMessage";

const ChatRoomMentee = () => {
  return (
    <Container>
      <TopContainer>
        <TopBar txt={"채팅하기"} />
        <FuncBar>
          <RoomName>진로를 선택할 때 가장 중요한 기준입니다다다다</RoomName>
          <ButtonContainer>
            <Icon src={SearchBtnImg} alt="Search" />
            <Icon src={OutBtnImg} alt="Out" />
          </ButtonContainer>
        </FuncBar>
      </TopContainer>
      <MessageContainer>
        <Receiver message="안녕하세요, " username="호기심천국" />
        <Receiver
          message="멘토님! “진로를 선택할 때 가장 중요한 기준”에 대해 여쭙고 싶어 채팅드렸습니다."
          username="호기심천국"
        />
        <Sender message="안녕하세요" />
        <Sender message="호기심천국님! 잘 찾아오셨네요^^" />
        <Sender message="안녕하세요, 호기심천국님! 잘 찾아오셨네요^^" />
        <Receiver
          message="안녕하세요, 멘토님! “진로를 선택할 때 가장 중요한 기준”에 대해 여쭙고 싶어 채팅드렸습니다."
          username="호기심천국"
        />
        <Sender message="안녕하세요, 호기심천국님! 잘 찾아오셨네요^^" />
        <Sender message="안녕하세요, 호기심천국님! 잘 찾아오셨네요^^" />
        <Sender message="안녕하세요, 호기심천국님! 잘 찾아오셨네요^^" />
        <Receiver
          message="안녕하세요, 멘토님! “진로를 선택할 때 가장 중요한 기준”에 대해 여쭙고 싶어 채팅드렸습니다."
          username="호기심천국"
        />
        <Sender message="안녕하세요, 호기심천국님! 잘 찾아오셨네요^^" />
        <Sender message="안녕하세요, 호기심천국님! 잘 찾아오셨네요^^" />
      </MessageContainer>
      <InputMessage />
    </Container>
  );
};

export default ChatRoomMentee;

const Container = styled.div`
  background-color: #ededed;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  width: 363px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #7f7f7f;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
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
  flex: 1;
  padding: 31px 40px 0px 29px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
