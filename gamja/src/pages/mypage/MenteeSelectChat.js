import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import SubBar from "../../components/mypage/SubBar";
import RecentChat from "../../components/mypage/RecentChat";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const MenteeSelectChat = () => {
  const [chatList, setChatList] = useState([]);
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    const getChatList = () => {
      axios
        .get(`${Server_IP}/chat/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setChatList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getChatList();
  }, [accessToken]);
  return (
    <>
      <Container>
        <TopBar txt={"멘토링 일지"} />
        <SubBar />
        <RecentChat chatList={chatList} />
      </Container>
    </>
  );
};

export default MenteeSelectChat;

const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #f8f8f8;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
