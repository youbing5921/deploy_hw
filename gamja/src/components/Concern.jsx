import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenteeImg from "../images/MenteeImg.svg";
import SendBtn from "../images/SendBtn.svg";

const Concern = ({ concernList }) => {
  const navigate = useNavigate();
  return (
    <>
      {concernList.map((concern) => (
        <ConcernBox key={concern.id}>
          <Info>
            <Profile
              src={MenteeImg}
              alt="profileImg"
              onClick={() => navigate(`/userpage/${concern.name}`)}
            />
            <Username onClick={() => navigate(`/userpage/${concern.name}`)}>
              {concern.name}
            </Username>
            <Category>{concern.category1}</Category>
            <Category>{concern.category2}</Category>
            <Category>{concern.category3}</Category>
          </Info>
          <Content>
            <Comment>{concern.comment}</Comment>
          </Content>
          <ChatBox>
            <ChatInputWrapper>
              <ChatInput
                type="text"
                placeholder="멘티의 고민 해결에 실마리가 될 한마디 해답을 주세요"
              />
              <SendButton>
                <img src={SendBtn} alt="send" />
              </SendButton>
            </ChatInputWrapper>
          </ChatBox>
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
  margin: 17px 40px;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 12px;
`;

const Category = styled.div`
  display: inline-block;
  padding: 3px 9px;
  border-radius: 5px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 3px;
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

const ChatBox = styled.div`
  margin-top: 10px;
`;

const ChatInputWrapper = styled.div`
  position: relative;
`;

const ChatInput = styled.input`
  width: 442px;
  height: 38px;
  padding: 3px 10px 3px 20px;
  border: none;
  border-radius: 100px;
  background: #f6f6f6;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;
  outline: none;
  font-size: 10px;
  font-weight: 300;
  ::placeholder {
    color: #000;
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
