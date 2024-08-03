import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import MenuBar from "../../components/chat/MenuBar";
import RecentChat from "../../components/chat/RecentChat";
import InterestMentor from "../../components/chat/InterestMentor";
import AdZone from "../../components/chat/AdZone";
import axios from "axios";

const ChatListMentee = () => {
  const [selectedNav, setSelectedNav] = useState("recent");
  const [chatList, setChatList] = useState([]);
  const [interestList, setInterestList] = useState([]);

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

  const getInterestList = () => {
    axios
      .get("http://127.0.0.1:8000/chat/my-mentors/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setInterestList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getChatList();
    getInterestList();
  }, []);

  const onClickNav = (nav) => {
    setSelectedNav(nav);
  };
  return (
    <>
      <Container>
        <TopBar txt={"채팅하기"} />
        <MenuBar
          txt={"관심 멘토 목록"}
          selectedNav={selectedNav}
          onClickNav={onClickNav}
        />
        <ListBox>
          {selectedNav === "recent" && <RecentChat chatList={chatList} />}
          {selectedNav === "suggest" && (
            <InterestMentor interestList={interestList} />
          )}
        </ListBox>
        <BottomBar>
          <AdZone />
        </BottomBar>
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
`;

const ListBox = styled.div`
  padding: 15px 0px;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 520px;
  height: 148px;
  background: #f8f8f8;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 38px 40px;
`;
