import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RateBox = ({ rating }) => {
  const starsArr = ["first", "second", "third", "fourth", "last"];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = (rating) => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let remainingScore = (rating * 95) / 100;
    let i = 0;

    while (remainingScore > 19) {
      tempStarRatesArr[i] = 19;
      i += 1;
      remainingScore -= 19;
    }
    tempStarRatesArr[i] = remainingScore;
    return tempStarRatesArr;
  };

  useEffect(() => {
    setRatesResArr(calcStarRates(rating));
  }, [rating]);

  return (
    <RatingBox>
      <StarRateWrap>
        {starsArr.map((item, idx) => {
          const gradientId = `${item}StarGradient`;
          const isPartialStar = ratesResArr[idx] < 19 && ratesResArr[idx] > 0;

          return (
            <span className="star_icon" key={`${item}_${idx}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                {/* <clipPath id={`${item}StarClip`}>
                  <rect width={`${ratesResArr[idx]}`} height="19" />
                </clipPath> */}
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
                  d="M0 9.5L6.56237 6.87722L9.1996 0.314826L11.8131 6.87929L18.3775 9.50724L11.8152 12.13L9.19239 18.6924L6.56444 12.1279L0 9.5Z"
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
        {rating}
        <span>/100</span>
      </Rating>
    </RatingBox>
  );
};

export default RateBox;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 15px;
  background: #f1f0f0;
  width: 189px;
  padding: 5px 15px;
`;

const StarRateWrap = styled.div`
  display: flex;
  align-items: center;
  .star_icon {
    display: inline-flex;
    margin-right: 10px;
  }
`;

const Rating = styled.div`
  color: #494949;
  text-align: center;
  font-size: 10px;
  font-weight: 600;

  > span {
    color: #a4a4a4;
    font-size: 10px;
    font-weight: 600;
  }
`;
