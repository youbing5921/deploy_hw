import React from "react";
import styled from "styled-components";
import TopBar from "../../components/mypage/TopBar";

const journalArr = [
  {
    id: 1,
    title: "새로운 생각이 드는 날 #1",
    author: "김조이",
    writedate: "2024.07.31",
    content:
      "나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.나는 지금 매우 배고픔. 지금이 딱 배고픔의 정상격임. 왜 대체 이시간에 배고파서 사람을 곤란하게 하는 것임? 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요. 어이가 없으세요 아까 볶음밥이랑 닭가슴살 드셔놓고 아무것도 안 먹은 것 마냥 배고픔 시위하시는 님이 참 어이없어요.",
  },
];

const JournalDetail = () => {
  return (
    <>
      {journalArr.map((info) => (
        <Container key={info.id}>
          <TopBar txt={"멘토링 일지"} />
          <JournalInfo>
            <Title>{info.title}</Title>
            <Together>
              <P>by&nbsp;</P>
              <Author>{info.author}</Author>
              <P>&nbsp;･&nbsp;</P>
              <WriteDate>{info.writedate}</WriteDate>
            </Together>
          </JournalInfo>
          <StyledHr />
          <ContentBox>
            <Content>{info.content}</Content>
          </ContentBox>
        </Container>
      ))}
    </>
  );
};

export default JournalDetail;
const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #f8f8f8;
  margin: 0 auto;
`;

const JournalInfo = styled.div`
  margin-top: 31px;
  padding: 10px 40px;
`;
const Title = styled.div`
  color: #494949;
  font-size: 30px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.66px;
  margin-bottom: 30px;
`;
const Together = styled.div`
  display: flex;
`;
const P = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.33px;
`;
const Author = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.33px;
`;
const WriteDate = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.33px;
`;

const StyledHr = styled.hr`
  margin-top: 15px;
  width: 520px;
  height: 0.5px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #494949;
  border: none;
`;

const ContentBox = styled.div`
  padding: 27px 40px;
`;
const Content = styled.div`
  color: #7f7f7f;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.44px;
`;
