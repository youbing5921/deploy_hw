import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import xBtn from "../../images/xBtn.svg";
import { useNavigate, useParams } from "react-router-dom";
import WriteRate from "../../components/mentee/WriteRate";
import axios from "axios";
import SaveReview from "../../components/mentee/SaveReview";

const Server_IP = process.env.REACT_APP_Server_IP;

const WriteReview = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [chatRoomData, setChatRoomData] = useState([]);
  const [Info, setInfo] = useState([]);
  const [score, setScore] = useState(0);
  const [content, setContent] = useState("");
  const accessToken = localStorage.getItem("access");

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

  useEffect(() => {
    if (!chatRoomData.mentor_id) return;

    const getProfile = () => {
      axios
        .get(`${Server_IP}/profile/${chatRoomData.mentor_id}/`, {
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

    getProfile();
  }, [accessToken, chatRoomData.mentor_id]);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      chatroomId: roomId,
      content: content,
      score: parseInt(score, 10),
    };

    // console.log("Submitting data:", data);

    axios
      .post(`${Server_IP}/review/`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        alert("후기가 성공적으로 제출되었습니다.");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error.response);
        alert("후기 제출에 실패하였습니다.");
      });
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <WholeBox>
          <Top>
            <NameBox>
              <Left>
                <Profile src={MentorImg} />
              </Left>
              <Right>
                <Username>{Info.name}</Username>
                {Info.info?.interests_display.map((interest, idx) => (
                  <CategoryBox key={idx}>
                    <Category>{interest.name}</Category>
                  </CategoryBox>
                ))}
              </Right>
            </NameBox>
            <CloseBtn src={xBtn} onClick={onCancel} />
          </Top>
          <RateContainer>
            <Title>멘토님의 등대 지수</Title>
            <SubTitle>
              {Info.name}님은 얼마나 밝은 등대가 되어주셨나요?
            </SubTitle>
            <WriteRate setScore={setScore} />
          </RateContainer>
          <InputBox>
            <Title>멘토님의 멘토링 후기</Title>
            <SubTitle>
              {Info.name}님과 함께한 멘토링 후기를 남겨주세요.
            </SubTitle>
            <InputZone onChange={handleInputChange} value={content} />
          </InputBox>
          <BtnBox>
            <SaveReview handleSubmit={handleSubmit} />
          </BtnBox>
        </WholeBox>
      </Container>
    </>
  );
};

export default WriteReview;

const Container = styled.div`
  background: rgba(248, 248, 248, 0.85);
  margin: 0 auto;
  padding: 330px 86px;
`;

const WholeBox = styled.div`
  width: 360px;
  border-radius: 20px;
  background: linear-gradient(200deg, #fff8dd 0.49%, #fdde55 99.51%);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 26px 25px 48px 44px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;
const Right = styled.div``;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 14px;
`;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;
const Username = styled.div`
  color: #494949;
  font-size: 30px;
  font-weight: 500;
`;

const CloseBtn = styled.img`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  cursor: pointer;
`;

const CategoryBox = styled.div`
  display: inline-flex;
`;
const Category = styled.div`
  padding: 5px 10px;
  border-radius: 20px;
  background: rgba(73, 73, 73, 0.2);
  margin-right: 10px;
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

const RateContainer = styled.div`
  margin-top: 37px;
`;

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const SubTitle = styled.div`
  color: #7f7f7f;
  font-size: 10px;
  font-weight: 500;
`;

const InputBox = styled.div`
  margin-top: 37px;
`;

const BtnBox = styled.div`
  margin-top: 33px;
`;

const InputZone = styled.textarea`
  margin-top: 8px;
  border-radius: 20px;
  background: #ededed;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;
  padding: 10px 10px;
  border: none;
  outline: none;
  resize: none;
  height: auto;
  width: 318px;
  height: 93px;
  font-family: Pretendard;
`;
