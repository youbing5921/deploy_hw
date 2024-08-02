import React from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import xBtn from "../../images/xBtn.svg";
import { useNavigate } from "react-router-dom";
import WriteRate from "../../components/mentee/WriteRate";

const userInfo = [
  {
    id: "1",
    name: "척척육은영",
    mentoringRecord: [
      {
        interest: "가치관",
        count: 0,
      },
      {
        interest: "재테크",
        count: 0,
      },
      {
        interest: "사랑",
        count: 2,
      },
    ],
  },
];

const WriteReview = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <>
      {userInfo.map((info) => (
        <Container key={info.id}>
          <WholeBox>
            <Top>
              <NameBox>
                <Left>
                  <Profile src={MentorImg} />
                </Left>
                <Right>
                  <Username>{info.name}</Username>
                  {info.mentoringRecord.map((record, idx) => (
                    <CategoryBox key={idx}>
                      <Category>{record.interest}</Category>
                    </CategoryBox>
                  ))}
                </Right>
              </NameBox>
              <CloseBtn src={xBtn} onClick={onCancel} />
            </Top>
            <RateContainer>
              <Title>멘토님의 등대 지수</Title>
              <SubTitle>
                {info.name}님은 얼마나 밝은 등대가 되어주셨나요?
              </SubTitle>
              <WriteRate />
            </RateContainer>
            <InputBox>
              <Title>멘토님의 멘토링 후기</Title>
              <SubTitle>
                {info.name}님과 함께한 멘토링 후기를 남겨주세요.
              </SubTitle>
            </InputBox>
          </WholeBox>
        </Container>
      ))}
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
  cursor: pointer;
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
