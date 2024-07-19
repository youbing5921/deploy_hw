import React from "react";
import styled from "styled-components";

const quoteList = [
  {
    quote: "가르치는 것은 \n두 번 배우는 것이다",
    author: "프랑스 수필가, 죠세프 수베르",
  },
  {
    quote: "두 번 배우는 것이다",
    author: "프랑스 수필가, ",
  },
  {
    quote: "가르치는 것은 ",
    author: " 죠세프 수베르",
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
