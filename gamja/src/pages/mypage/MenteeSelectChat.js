import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import SubBar from "../../components/mypage/SubBar";
import RecentChat from "../../components/mypage/RecentChat";
import axios from "axios";

const MenteeSelectChat = () => {
  const [chatList, setChatList] = useState([]);

  const getChatList = () => {
    axios
      .get("http://127.0.0.1:8000/chat/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setChatList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getChatList();
  }, []);
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
`;
