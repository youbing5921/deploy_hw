import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WriteRate = ({ setScore }) => {
  const [score, setScoreState] = useState("");
  const starsArr = ["first", "second", "third", "fourth", "last"];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = (score) => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let remainingScore = (score * 120) / 100;
    let i = 0;

    while (remainingScore > 24) {
      tempStarRatesArr[i] = 24;
      i += 1;
      remainingScore -= 24;
    }
    tempStarRatesArr[i] = remainingScore;
    return tempStarRatesArr;
  };

  useEffect(() => {
    setRatesResArr(calcStarRates(score));
    setScore(score);
  }, [score, setScore]);

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      setScoreState(value);
    }
  };

  return (
    <RatingBox>
      <StarRateWrap>
        {starsArr.map((item, idx) => {
          const gradientId = `${item}StarGradient`;
          const isPartialStar = ratesResArr[idx] < 24 && ratesResArr[idx] > 0;

          return (
            <span className="star_icon" key={`${item}_${idx}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  {isPartialStar && (
                    <linearGradient
                      id={gradientId}
                      x1="0.622282"
                      y1="9.49279"
                      x2="18"
                      y2="9.4791"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FDDE55" />
                      <stop offset="1" stopColor="#494949" />
                    </linearGradient>
                  )}
                </defs>
                <path
                  id={`${item}Star`}
                  d="M0.685547 12L8.76231 8.77197L12.0081 0.69517L15.2247 8.77451L23.3041 12.0089L15.2273 15.2369L11.9993 23.3137L8.76486 15.2344L0.685547 12Z"
                  fill={
                    ratesResArr[idx] === 0
                      ? "#494949"
                      : isPartialStar
                      ? `url(#${gradientId})`
                      : "#FDDE55"
                  }
                />
              </svg>
            </span>
          );
        })}
      </StarRateWrap>
      <Rating>
        <InputScore value={score} onChange={handleInputChange} />
        <span>/100</span>
      </Rating>
    </RatingBox>
  );
};

export default WriteRate;

const RatingBox = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 15px;
  background: #f8f8f8;
  width: 288px;
  padding: 14px 25px;
`;

const StarRateWrap = styled.div`
  display: flex;
  align-items: center;
  .star_icon {
    display: inline-flex;
    margin-right: 16px;
  }
`;

const InputScore = styled.input`
  background: none;
  outline: none;
  width: 35px;
  color: #494949;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid #494949;
  margin-right: 3px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: #a4a4a4;
    font-size: 20px;
    font-weight: 600;
  }
`;
