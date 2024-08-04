import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const InterestBtn = ({ Info }) => {
  const [like, setLike] = useState(Info);

  useEffect(() => {
    setLike(Info);
  }, [Info]);

  const postLike = (info) => {
    axios
      .post(
        `http://127.0.0.1:8000/mentors/${like.info.id}/likes/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("멘토 관심 설정이 완료되었습니다.");
        setLike((prevLike) => ({
          ...prevLike,
          is_subscribed: response.data.is_subscribed,
        }));
      })
      .catch((error) => {
        console.log(error);
        console.log(info.id);
        alert("멘토 관심 설정에 실패하였습니다.");
      });
  };

  return (
    <>
      <Button onClick={() => postLike(like)}>
        {like.is_subscribed ? "관심멘토 해제" : "관심멘토 설정"}
      </Button>
    </>
  );
};

export default InterestBtn;

const Button = styled.button`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  background: #7f7f7f;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
`;
