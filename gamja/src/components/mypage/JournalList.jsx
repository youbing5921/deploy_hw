import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import axios from "axios";

const JournalList = ({ txt, $fontColor, $bgColor, Info }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [journalInfo, setJournalInfo] = useState([]);

  const getJournalList = () => {
    axios
      .get("http://127.0.0.1:8000/log/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setJournalInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getJournalList();
  }, []);

  if (matchPath("/mypage/mentee/:username", location)) {
    return (
      <>
        <Container>
          <Top>
            <Title>나의 멘토링 {txt}</Title>
            <WriteBtn
              onClick={() => navigate(`/mypage/mentee/journal/select/`)}
              $fontColor={$fontColor}
              $bgColor={$bgColor}
            >
              일지쓰기
            </WriteBtn>
          </Top>
          <BoldHr />
          <ListBox>
            {journalInfo.map((journal) => (
              <React.Fragment key={journal.id}>
                <Journal onClick={() => navigate("/mypage/journal/detail/:id")}>
                  <JournalTitle>{journal.title}</JournalTitle>
                  <WriteDate>{journal.date}</WriteDate>
                </Journal>
                <BasicHr />
              </React.Fragment>
            ))}
          </ListBox>
        </Container>
      </>
    );
  }
  if (matchPath("/mypage/mentor/:username", location)) {
    return (
      <>
        <Container>
          <Top>
            <Title>나의 멘토링 {txt}</Title>
            <WriteBtn
              onClick={() => navigate(`/mypage/mentor/journal/select/`)}
              $fontColor={$fontColor}
              $bgColor={$bgColor}
            >
              일지쓰기
            </WriteBtn>
          </Top>
          <BoldHr />
          <ListBox>
            {journalInfo.map((journal) => (
              <React.Fragment key={journal.id}>
                <Journal onClick={() => navigate("/mypage/journal/detail/:id")}>
                  <JournalTitle>{journal.title}</JournalTitle>
                  <WriteDate>{journal.date}</WriteDate>
                </Journal>
                <BasicHr />
              </React.Fragment>
            ))}
          </ListBox>
        </Container>
      </>
    );
  }
};

export default JournalList;

const Container = styled.div`
  padding: 0px 40px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0px;
`;

const Title = styled.div`
  color: #494949;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const WriteBtn = styled.button`
  padding: 5.5px 21.5px;
  font-family: "Pretendard";
  color: ${(props) => props.$fontColor || "#494949"};
  background-color: ${(props) => props.$bgColor || "#FDDE55"};
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const BoldHr = styled.div`
  width: 520px;
  height: 2px;
  background: #494949;
`;

const BasicHr = styled.div`
  width: 520px;
  height: 1px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #494949;
`;

const ListBox = styled.div`
  width: 520px;
  height: 170px;
`;

const Journal = styled.div`
  padding: 7.5px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const JournalTitle = styled.div`
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;

const WriteDate = styled.div`
  color: #7f7f7f;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
`;
