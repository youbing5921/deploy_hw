import React from "react";
import styled from "styled-components";

const quoteList = [
  {
    quote: "내 자신에 대한 자신감을 잃으면,\n온 세상이 나의 적이 된다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "행복은 성취의 기쁨과 창조적\n노력이 주는 쾌감 속에 있다.",
    author: "프랭클린 루스벨트",
  },
  {
    quote: "모자라는 부분을 채워가는 것이\n행복이다.",
    author: "로버트 프로스트",
  },
  {
    quote: "일을 즐기면\n일의 완성도가 높아진다.",
    author: "아리스토텔레스",
  },
  {
    quote: "보이는 것보다 많이 가지고,\n아는 것보다 적게 말하라.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "사랑으로 행해진 일은\n언제나 선악을 초월한다.",
    author: "프레드리히 니체",
  },
  {
    quote: "가르치는 것은\n두 번 배우는 것이다",
    author: "죠세프 수베르",
  },
];

const QuoteSection = () => {
  const randomSelec = quoteList[Math.floor(Math.random() * quoteList.length)];
  return (
    <>
      <Quote>{randomSelec.quote}</Quote>
      <Author>{randomSelec.author}</Author>
    </>
  );
};

export default QuoteSection;

const Quote = styled.div`
  white-space: pre-line;
  color: #494949;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Author = styled.div`
  color: #a4a4a4;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 22px;
`;
