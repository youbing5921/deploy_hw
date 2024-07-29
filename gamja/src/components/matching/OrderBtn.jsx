import React, { useEffect } from "react";
import styled from "styled-components";

const OrderBtn = ({ disabled, onClick, direction }) => {
  useEffect(() => {
    const btn = document.querySelector(`.${direction}Btn`);
    btn.style.opacity = disabled ? 0.2 : 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  return (
    <ButtonStyle disabled={disabled} onClick={onClick}>
      <img
        src={`/img/${direction}-arrow.svg`}
        className={`${direction}Btn`}
        alt={`${direction}Btn`}
      />
    </ButtonStyle>
  );
};

export default OrderBtn;

const ButtonStyle = styled.button`
  appearance: none;
  padding: 0;
  border: 0;
  width: 60px;
  height: 60px;
  background-color: #f8f8f8;

  img {
    cursor: pointer;
    width: 60px;
    height: 60px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
