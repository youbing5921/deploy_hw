import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MentorImg from "../../images/MentorImg.svg";

const Server_IP = process.env.REACT_APP_Server_IP;

const MyConcernList = () => {
  const [Info, setInfo] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    const getAllConcerns = () => {
      axios
        .get(`${Server_IP}/my-page/concerns/`, {
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

    getAllConcerns();
  }, [accessToken]);

  const deleteConcern = (e) => {
    if (!window.confirm("고민을 삭제하시겠습니까?")) {
      return;
    } else {
      let concern = e ? e.target.id : "";
      axios
        .delete(`${Server_IP}/concerns/${concern}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          alert("고민이 삭제되었습니다.");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          alert("삭제에 실패했습니다.");
        });
    }
  };

  return (
    <>
      {Info.map((info, idx) => (
        <Content key={idx}>
          <TopBox>
            <Concern>{info?.content}</Concern>
            <DeleteBtn onClick={deleteConcern} id={info.id}>
              삭제
            </DeleteBtn>
          </TopBox>
          {info?.comments?.length > 0 && (
            <ReplyWrapper>
              {info.comments.map((comment, idx) => (
                <Reply
                  key={idx}
                  onClick={() => navigate(`/profile/mentor/${comment.author}`)}
                >
                  <Profile src={MentorImg} alt="MentorImg" />
                  <Text>{comment?.content}</Text>
                </Reply>
              ))}
            </ReplyWrapper>
          )}
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

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteBtn = styled.div`
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
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
