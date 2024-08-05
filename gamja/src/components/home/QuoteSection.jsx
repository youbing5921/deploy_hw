import React from "react";
import styled from "styled-components";

const quoteList = [
  {
    quote: "언제나 현재에 집중할 수 있다면\n행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "행복은 습관이다.\n그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "그대의 하루하루를\n그대의 마지막날이라고 생각하라",
    author: "호라티우스",
  },
  {
    quote: "자신감 있는 표정을 지으면\n자신감이 생긴다",
    author: "찰스 다윈",
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
