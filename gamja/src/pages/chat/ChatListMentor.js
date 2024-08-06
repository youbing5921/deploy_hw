import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackHome from "../../components/common/BackHome";
import MenuBar from "../../components/chat/MenuBar";
import RecentChat from "../../components/chat/RecentChat";
import SuggestMentee from "../../components/chat/SuggestMentee";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const ChatListMentee = () => {
  const [selectedNav, setSelectedNav] = useState("recent");
  const [chatList, setChatList] = useState([]);
  const [suggestList, setSuggestList] = useState([]);
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
          // console.log(response.data.recent_chats);
          setChatList(response.data.recent_chats);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getSuggestList = () => {
      axios
        .get(`${Server_IP}/chat/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data.mentee_suggestions);
          setSuggestList(response.data.mentee_suggestions);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getChatList();
    getSuggestList();
  }, [accessToken]);

  const onClickNav = (nav) => {
    setSelectedNav(nav);
  };
  return (
    <>
      <Container>
        <BackHome txt={"채팅하기"} />
        <MenuBar
          txt={"멘티의 제안 목록"}
          selectedNav={selectedNav}
          onClickNav={onClickNav}
        />
        <ListBox>
          {selectedNav === "recent" && <RecentChat chatList={chatList} />}
          {selectedNav === "suggest" && (
            <SuggestMentee suggestList={suggestList} />
          )}
        </ListBox>
      </Container>
    </>
  );
};

export default ChatListMentee;

const Container = styled.div`
  background-color: #f8f8f8;
  width: 600px;
  margin: 0 auto;
  height: 1230px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListBox = styled.div`
  padding: 15px 0px;
`;
