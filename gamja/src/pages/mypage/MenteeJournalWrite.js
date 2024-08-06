import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/mypage/TopBar";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const MenteeJournalWrite = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access");
  const { roomId } = useParams();
  const [chatRoomData, setChatRoomData] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    const getMessage = () => {
      axios
        .get(`${Server_IP}/chat/${roomId}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setChatRoomData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getMessage();
  }, [accessToken, roomId]);

  const postJournal = () => {
    axios
      .post(
        `${Server_IP}/log/`,
        {
          chatroomId: roomId,
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        alert("저장이 완료되었습니다.");
        navigate("/mypage/mentee/:username");
      })
      .catch((error) => {
        console.log(error);
        alert("저장에 실패했습니다.");
      });
  };

  return (
    <>
      <Container>
        <TopBar txt={"멘토링 일지"} />
        <JournalInfo>
          <TitleInput
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onChangeTitle}
          />
          <Together>
            <ChatTitle>{chatRoomData.title}</ChatTitle>
            <P>&nbsp;･&nbsp;</P>
            <Author>{chatRoomData.mentor_name}</Author>
          </Together>
        </JournalInfo>
        <StyledHr />
        <ContentBox>
          <Content
            placeholder="내용을 입력하세요"
            value={content}
            onChange={onChangeContent}
          />
        </ContentBox>
        <ButtonBox>
          <Button onClick={postJournal}>저장하기</Button>
        </ButtonBox>
      </Container>
    </>
  );
};

export default MenteeJournalWrite;

const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #f8f8f8;
  margin: 0 auto;
`;

const TitleInput = styled.input`
  color: #494949;
  font-size: 30px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.66px;
  border: none;
  background: none;
  outline: none;
  font-family: Pretendard;
  &::placeholder {
    color: #494949;
  }
  width: 520px;
`;

const JournalInfo = styled.div`
  margin-top: 31px;
  padding: 10px 40px;
`;

const Together = styled.div`
  margin-top: 30px;
  display: flex;
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.33px;
`;

const P = styled.div``;
const ChatTitle = styled.div``;
const Author = styled.div``;

const StyledHr = styled.hr`
  margin-top: 15px;
  width: 520px;
  height: 0.5px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #494949;
  border: none;
`;

const ContentBox = styled.div`
  padding: 27px 40px;
`;

const Content = styled.textarea`
  color: #7f7f7f;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  font-family: Pretendard;
  letter-spacing: -0.44px;
  border: none;
  background: none;
  outline: none;
  resize: none;
  width: 520px;
  height: auto;
  min-height: 390px;
  &::placeholder {
    color: rgba(73, 73, 73, 0.2);
  }
  margin-bottom: 395px;
`;
const ButtonBox = styled.div`
  display: flex;
  padding: 33px 176px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 15px;
  display: flex;
  width: 248px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background: #fdde55;
  color: #494949;
`;
