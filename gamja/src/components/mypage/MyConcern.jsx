import React from "react";
import styled from "styled-components";

const MyConcern = () => {
  return (
    <>
      <Container>
        <Top>
          <Title>나의 한 줄 고민</Title>
          <ButtonBox>
            <Button>지난 고민 보기</Button>
            <Button>고민 변경하기</Button>
          </ButtonBox>
        </Top>
        <Content>
          사랑하는 사람과 경제적 수준 차이가 심해요. 이 관계 계속해도
          괜찮을까요?
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
  height: 183px;
  padding: 25px 29px 0px 29px;
  border-radius: 15px;
  background: #f8f8f8;
`;
