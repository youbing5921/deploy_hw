import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MentorImg from "../../images/MentorImg.svg";

const MyConcernList = () => {
  const [Info, setInfo] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    const getAllConcerns = () => {
      axios
        .get("http://127.0.0.1:8000/my-page/concerns/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAllConcerns();
  }, [accessToken]);
  return (
    <>
      {Info.map((info, idx) => (
        <Content key={idx}>
          <Concern>{info?.content}</Concern>
          <ReplyWrapper>
            {info?.comments?.map((comment, idx) => (
              <Reply
                key={idx}
                onClick={() => navigate(`/profile/mentor/${comment.author}`)}
              >
                <Profile src={MentorImg} alt="MentorImg" />
                <Text>{comment?.content}</Text>
              </Reply>
            ))}
          </ReplyWrapper>
        </Content>
      ))}
    </>
  );
};

export default MyConcernList;

const Content = styled.div`
  padding: 25px 20px;
  border-radius: 15px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
`;

const Concern = styled.div`
  color: #494949;
  font-size: 15px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ReplyWrapper = styled.div`
  border-radius: 15px;
  background: #ededed;
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 8px;
`;

const Reply = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 13px;
  background: #f8f8f8;
  box-shadow: -3px 4px 6px 0px rgba(0, 0, 0, 0.1) inset;
  padding: 8px 13px;
  height: 30px;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
`;

const Text = styled.div`
  color: #494949;
  font-size: 13px;
  font-weight: 500;
`;
