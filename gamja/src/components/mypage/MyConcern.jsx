import React from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import { useNavigate } from "react-router-dom";

const ReplyList = [
  {
    id: 1,
    reply:
      "사랑도 결국 현실이에요. 내가 고민하기 시작한 이상 문제는 이미 시작된거에요.",
  },
  {
    id: 2,
    reply: "돈은 어디까지나 극복 가능한 문제에요.",
  },
  {
    id: 3,
    reply: "본질에 집중해보세요.",
  },
  {
    id: 4,
    reply: "직접 경험해보며 느껴보세요. 계속해도될지 직접 결정해봐요.",
  },
  {
    id: 5,
    reply: "몰라요 나도.",
  },
];

const MyConcern = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Top>
          <Title>나의 한 줄 고민</Title>
          <ButtonBox>
            <Button>지난 고민 보기</Button>
            <Button>고민 생성하기</Button>
          </ButtonBox>
        </Top>
        <Content>
          <Concern>
            사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도
            괜찮을까요?
          </Concern>
          <ReplyWrapper>
            {ReplyList.map((reply) => (
              <Reply
                key={reply.id}
                onClick={() => navigate("/profile/mentor/:username")}
              >
                <Profile src={MentorImg} alt="MentorImg" />
                <Text>{reply.reply}</Text>
              </Reply>
            ))}
          </ReplyWrapper>
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
