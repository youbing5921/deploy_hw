import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import BottonBtn from "../components/BottonBtn";
import BackBtn from "../components/BackBtn";
import TitleOval from "../components/TitleOval";
import ColorfulInput from "../components/ColorfulInput";

const InputInfo = () => {
  const [name, setName] = useState("");
  // const [birth, setBirth] =

  const onNameChange = (e) => {
    let tempName = e.target.value;
    const maxlength = e.target.maxLength;
    tempName = fitLength(tempName, maxlength);
    setName(tempName);

    const titleOval = document.querySelector(".titleOval");
    const newBottonBtn = document.querySelector(".newBottonBtn");
    if (tempName.length) {
      titleOval.style.backgroundColor = "#7F7F7F";
      newBottonBtn.style.backgroundColor = "#494949";
    } else {
      titleOval.style.backgroundColor = "rgba(73, 73, 73, 0.2)";
      newBottonBtn.style.backgroundColor = "rgba(73, 73, 73, 0.2)";
    }
  };

  const fitLength = (value, maxlength) => {
    return value.length > maxlength ? value.substr(0, maxlength) : value;
  };

  return (
    <MainContainer>
      <BackBtn />
      <TitleOval className="titleOval">이름 입력하기</TitleOval>
      <NameInput>
        제 이름은
        <br />
        <input
          type="text"
          placeholder="홍길동"
          value={name}
          maxLength={3}
          onChange={onNameChange}
          autoFocus
        />
        입니다.
      </NameInput>
      <NewBottonBtn className="newBottonBtn">다음</NewBottonBtn>
    </MainContainer>
  );
};

export default InputInfo;

const NameInput = styled(ColorfulInput)`
  input {
    width: 160px;
  }
`;

const NewBottonBtn = styled(BottonBtn)`
  margin: auto auto 56px auto;
`;
