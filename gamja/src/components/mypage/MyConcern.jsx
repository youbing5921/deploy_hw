import React from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import { useNavigate } from "react-router-dom";

const MyConcern = ({ Info }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name");
  const hasConcern = Info?.concern?.content?.length > 0;
  const hasComments = Info?.concern?.comments?.length > 0;

  return (
    <>
      <Container>
        <Top>
          <Title>나의 한 줄 고민</Title>
          <ButtonBox>
            {hasConcern && (
              <Button onClick={() => navigate("/mypage/concerns-list/")}>
                지난 고민 보기
              </Button>
            )}
            <Button onClick={() => navigate("/mypage/concern/write/")}>
              고민 생성하기
            </Button>
          </ButtonBox>
        </Top>
        <Content>
          {hasConcern ? (
            <Concern>{Info.concern.content}</Concern>
          ) : (
            <BlankText>{username}님의 고민을 공유해 주세요</BlankText>
          )}
          {hasConcern && hasComments && (
            <ReplyWrapper>
              {Info.concern.comments.map((comment, idx) => (
                <Reply
                  key={idx}
                  onClick={() => navigate(`/profile/mentor/${comment.author}`)}
                >
                  <Profile src={MentorImg} alt="MentorImg" />
                  <Text>{comment.content}</Text>
                </Reply>
              ))}
            </ReplyWrapper>
          )}
        </Content>
      </Container>
    </>
  );
};

export default MyConcern;

const Container = styled.div`
  padding: 0px 40px;
  margin-top: 7px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #494949;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 13px 3px;
`;

const ButtonBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  height: 27px;
  padding: 0px 10px;
  border-radius: 10px;
  background: #fdde55;
  border: none;
  color: #494949;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 25px 20px;
  border-radius: 15px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const BlankText = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
`;
