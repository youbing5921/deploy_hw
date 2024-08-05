import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";
import BackHome from "../../components/common/BackHome.jsx";
import UserInfo from "../../components/mypage/UserInfo";
import JournalList from "../../components/mypage/JournalList";
import StarBox from "../../components/mypage/StarBox";
import MentorHistory from "../../components/mypage/MentorHistory";
import Review from "../../components/mypage/Review";
import Column from "../../components/mypage/Column.jsx";
import LogoutWithdrawBtn from "../../components/mypage/LogoutWithdrawBtn.jsx";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const MyPageMentor = () => {
  const [Info, setInfo] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");

  function logout() {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return;
    } else {
      axios
        .post(
          `${Server_IP}/users/logout/`,
          {
            refresh: refreshToken,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          localStorage.clear();
          alert("로그아웃이 완료되었습니다.");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function menberWithdraw() {
    if (!window.confirm("탈퇴하시겠습니까?")) {
      return;
    } else {
      axios
        .delete(
          `${Server_IP}//users/users/${localStorage.getItem("user_id")}/`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          // console.log(response.data);
          navigate("/login");
        })
        .catch();
    }
  }

  useEffect(() => {
    axios
      .get(`${Server_IP}/my-page/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accessToken]);

  return (
    <>
      <Container>
        <BackHome txt={"마이페이지"} $marginLeft={"154px"} />
        <Both>
          <Left>
            <UserInfo profilImg={MenteeImg} Info={Info} />
          </Left>
          <Right>
            <Rating>
              <Title>나의 등대 지수</Title>
              <SubTitle>나는 멘티들에게 얼마나 밝은 등대일까?</SubTitle>
              <StarBox rating={Info.info?.rating} />
            </Rating>
            <ReviewBox>
              <Title>나의 멘토링 후기</Title>
              <Review Info={Info} review={Info.myReview} />
            </ReviewBox>
          </Right>
        </Both>
        <HistoryBox>
          <Title>나의 멘토링 내역</Title>
          <MentorHistory Info={Info} />
        </HistoryBox>
        <JournalList
          txt={"일지"}
          $fontColor={"#fff"}
          $bgColor={"#03AED2"}
          Info={Info}
        />
        <ColumnBox>
          <Title>내가 스크랩한 칼럼</Title>
          <Column
            $categoryBg={"rgba(73, 73, 73, 0.20)"}
            $categoryColor={"#494949"}
            Info={Info.scrapedColumns}
          />
        </ColumnBox>
        <ButtonBox>
          <LogoutWithdrawBtn text="logout" onClick={logout} />
          <LogoutWithdrawBtn text="withdraw" onClick={menberWithdraw} />
        </ButtonBox>
      </Container>
    </>
  );
};

export default MyPageMentor;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Both = styled.div`
  display: flex;
  flex-direction: row;
  padding: 34px 40px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  gap: 13px;
`;

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const SubTitle = styled.div`
  color: #7f7f7f;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 9px;
`;

const Rating = styled.div``;

const HistoryBox = styled.div`
  overflow: hidden;
  padding: 0px 40px;
  margin-bottom: 75px;
`;
const ReviewBox = styled.div``;

const ColumnBox = styled.div`
  margin-top: 81px;
  margin-left: 40px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 32px 40px 20px 0;

  img {
    margin-left: auto;
    margin-bottom: auto;
  }
`;
