import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StarBox = ({ rating }) => {
  const starsArr = ["first", "second", "third", "fourth", "last"];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = (rating) => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let remainingScore = (rating * 145) / 100;
    let i = 0;

    while (remainingScore > 29) {
      tempStarRatesArr[i] = 29;
      i += 1;
      remainingScore -= 29;
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
          const isPartialStar = ratesResArr[idx] < 29 && ratesResArr[idx] > 0;

          return (
            <span className="star_icon" key={`${item}_${idx}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                {/* <clipPath id={`${item}StarClip`}>
                  <rect width={`${ratesResArr[idx]}`} height="29" />
                </clipPath> */}
                <defs>
                  {isPartialStar && (
                    <linearGradient
                      id={gradientId}
                      x1="1"
                      y1="14.8799"
                      x2="18"
                      y2="14.8799"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#03AED2" />
                      <stop offset="1" stopColor="#E6E6E6" />
                    </linearGradient>
                  )}
                </defs>
                <path
                  id={`${item}Star`}
                  d="M0.989258 14.8909L10.9893 10.8909L15.0113 0.890823L18.9893 10.8909L28.9893 14.8909L18.9893 18.8909L14.9893 28.8909L10.9893 18.8909L0.989258 14.8909Z"
                  fill={
                    ratesResArr[idx] === 0
                      ? "#E6E6E6"
                      : isPartialStar
                      ? `url(#${gradientId})`
                      : "#03AED2"
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

export default StarBox;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background: #f8f8f8;
  width: 289px;
  padding: 13px 25px;
`;

const StarRateWrap = styled.div`
  display: flex;
  align-items: center;
  .star_icon {
    display: inline-flex;
    margin-right: 17px;
  }
`;

const Rating = styled.div`
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 600;

  > span {
    color: #a4a4a4;
    font-size: 15px;
    font-weight: 600;
  }
`;
