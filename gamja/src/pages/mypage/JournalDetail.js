import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/mypage/TopBar";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const JournalDetail = () => {
  const accessToken = localStorage.getItem("access");
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDetailJournal = () => {
      axios
        .get(`${Server_IP}/log/${id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getDetailJournal();
  }, [accessToken, id]);
  return (
    <>
      <Container>
        <TopBar txt={"멘토링 일지"} />
        <JournalInfo>
          <Title>{detail.title}</Title>
          <Together>
            <P>by&nbsp;</P>
            <Author>{detail.name}</Author>
            <P>&nbsp;･&nbsp;</P>
            <WriteDate>{detail.created_at}</WriteDate>
          </Together>
        </JournalInfo>
        <StyledHr />
        <ContentBox>
          <Content>{detail.content}</Content>
        </ContentBox>
      </Container>
    </>
  );
};

export default JournalDetail;
const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #f8f8f8;
  margin: 0 auto;
`;

const JournalInfo = styled.div`
  margin-top: 31px;
  padding: 10px 40px;
`;
const Title = styled.div`
  color: #494949;
  font-size: 30px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.66px;
  margin-bottom: 30px;
`;
const Together = styled.div`
  display: flex;
`;
const P = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.33px;
`;
const Author = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.33px;
`;
const WriteDate = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.33px;
`;

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
const Content = styled.div`
  color: #7f7f7f;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.44px;
`;
