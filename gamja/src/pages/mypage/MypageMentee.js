import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackHome from "../../components/common/BackHome.jsx";
import MenteeProfile from "../../components/mypage/MenteeProfile";
import MyConcern from "../../components/mypage/MyConcern";
import JournalList from "../../components/mypage/JournalList";
import MenteeHistory from "../../components/mypage/MenteeHistory";
import Column from "../../components/mypage/Column.jsx";
import LogoutWithdrawBtn from "../../components/mypage/LogoutWithdrawBtn.jsx";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const MypageMentee = () => {
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
    const getMenteeMypage = () => {
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
    };

    getMenteeMypage();
  }, [accessToken]);

  return (
    <>
      <Container>
        <BackHome txt={"마이페이지"} marginLeft={"154px"} />
        <Both>
          <Left>
            <MenteeProfile Info={Info} />
          </Left>
          <Right>
            <HistoryBox>
              <MenteeHistory Info={Info} />
            </HistoryBox>
          </Right>
        </Both>
        <ConcernBox>
          <MyConcern Info={Info} />
        </ConcernBox>
        <JournalBox>
          <JournalList txt={"일지"} Info={Info} />
        </JournalBox>
        <ColumnBox>
          <Tit>내가 스크랩한 칼럼</Tit>
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

export default MypageMentee;

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

const Left = styled.div``;
const Right = styled.div``;

const ConcernBox = styled.div`
  margin-bottom: 47px;
`;

const HistoryBox = styled.div``;
const JournalBox = styled.div`
  margin-bottom: 70px;
`;
const Tit = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const ColumnBox = styled.div`
  padding-left: 40px;
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
