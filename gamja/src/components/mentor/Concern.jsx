import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";
import SendBtn from "../../images/sendBtn.svg";
import axios from "axios";

const Concern = ({ concernList }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const postContent = () => {
    axios
      .post(`http://127.0.0.1:8000/concerns/${concernList.id}/comments/`, {
        content: content,
      })
      .then((response) => {
        console.log(response.data);
        alert("댓글이 작성되었습니다.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {concernList.map((concern) => (
        <ConcernBox key={concern.author.user}>
          <Info>
            <Profile
              src={MenteeImg}
              alt="profileImg"
              onClick={() => navigate(`/profile/mentee/${concern.mentee_name}`)}
            />
            <Username
              onClick={() => navigate(`/profile/mentee/${concern.mentee_name}`)}
            >
              {concern.mentee_name}
            </Username>
            {concern.interests.map((interest, idx) => (
              <Category key={idx}>{interest.name}</Category>
            ))}
          </Info>
          <Content>
            <Comment>{concern.content}</Comment>
          </Content>
          <ReplyBox>
            <ReplyInputWrapper>
              <ReplyInput
                type="text"
                placeholder="멘티의 고민 해결에 실마리가 될 한마디 해답을 주세요"
                value={content}
                onChange={onChangeContent}
              />
              <SendButton>
                <img src={SendBtn} alt="send" onClick={postContent} />
              </SendButton>
            </ReplyInputWrapper>
          </ReplyBox>
        </ConcernBox>
      ))}
    </>
  );
};

export default Concern;

const ConcernBox = styled.div`
  border-radius: 20px;
  background: #f8f8f8;
  padding: 21px 24px;
  margin: 17px 0px;
  align-self: stretch;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Username = styled.div`
  color: #494949;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 12px;
`;

const Category = styled.div`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 10px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 5px;
`;

const Content = styled.div`
  margin: 20px 10px;
`;

const Comment = styled.div`
  color: #494949;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ReplyBox = styled.div`
  margin-top: 10px;
`;

const ReplyInputWrapper = styled.div`
  position: relative;
`;

const ReplyInput = styled.input`
  width: 442px;
  height: 38px;
  padding: 3px 10px 3px 20px;
  border: none;
  border-radius: 100px;
  background: #f6f6f6;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  ::placeholder {
    color: #a4a4a4;
  }
`;

const SendButton = styled.button`
  position: absolute;
  top: 53%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 30px;
    height: 30px;
  }
`;
