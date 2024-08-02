import React, { useState } from "react";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";
import TopBar from "../../components/common/TopBar";
import UserInfo from "../../components/mypage/UserInfo";
import JournalList from "../../components/mypage/JournalList";
import StarBox from "../../components/mypage/StarBox";
import MentorHistory from "../../components/mypage/MentorHistory";
import Review from "../../components/mypage/Review";
import Column from "../../components/mypage/Column.jsx";
import LogoutBtn from "../../components/mypage/LogoutBtn.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let mypageInfo = [
  {
    id: "1",
    name: "척척육은영",
    category: ["가치관", "진로", "사랑"],
    count: ["10", "20", "2"],
    rating: "50",
  },
];

const MyPageMentor = () => {
  const [Info, setInfo] = useState(mypageInfo);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken", response.data.access);
  const refreshToken = "";

  function logout() {
    axios
      .post(
        "http://127.0.0.1:8000/users/logout",
        {
          refresh: refreshToken,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("로그아웃이 완료되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {mypageInfo.map((info) => (
        <Container key={info.id}>
          <TopBar txt={"마이페이지"} $marginLeft={"154px"} />
          <Both>
            <Left>
              <UserInfo profilImg={MenteeImg} Info={Info} />
            </Left>
            <Right>
              <Rating>
                <Title>나의 등대 지수</Title>
                <SubTitle>나는 멘티들에게 얼마나 밝은 등대일까?</SubTitle>
                <StarBox rating={info.rating} />
              </Rating>
              <ReviewBox>
                <Title>나의 멘토링 후기</Title>
                <Review />
              </ReviewBox>
            </Right>
          </Both>
          <HistoryBox>
            <Title>나의 멘토링 내역</Title>
            <MentorHistory Info={Info} />
          </HistoryBox>
          <JournalList txt={"일지"} $fontColor={"#fff"} $bgColor={"#03AED2"} />
          <ColumnBox>
            <Title>내가 스크랩한 칼럼</Title>
            <Column />
          </ColumnBox>
          <ButtonBox>
            <LogoutBtn onClick={logout} />
          </ButtonBox>
        </Container>
      ))}
    </>
  );
};

export default MyPageMentor;

const Container = styled.div`
  background-color: #ededed;
  width: 600px;
  padding-bottom: 40px;
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
  margin-top: 31px;
  margin-left: 438px;
`;
