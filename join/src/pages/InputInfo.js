import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import BottonBtn from "../components/BottonBtn";
import BackBtn from "../components/BackBtn";
import TitleOval from "../components/TitleOval";
import ColorfulInput from "../components/ColorfulInput";

const InputInfo = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [step, setStep] = useState(1);

  // 이름 관련 함수
  const onNameChange = (e) => {
    const maxlength = e.target.maxLength;
    let tempName = fitLength(e.target.value, maxlength);
    setName(tempName);
  };

  useEffect(() => {
    const titleOval1 = document.querySelector(".titleOval1");
    const newBottonBtn1 = document.querySelector(".newBottonBtn1");
    const condition = name.length > 0;
    changeBtnColor(condition, titleOval1, newBottonBtn1);
  }, [name]);

  // 생년월일 관련 함수
  const onBirthChange = (e) => {
    const maxlength = e.target.maxLength;
    let tempBirth = fitLength(e.target.value, maxlength);
    const inputClassName = e.target.className;

    if (inputClassName === "year") {
      setYear(tempBirth);
    } else if (inputClassName === "month") {
      setMonth(tempBirth);
    } else {
      setDate(tempBirth);
    }
  };

  useEffect(() => {
    const titleOval2 = document.querySelector(".titleOval2");
    const newBottonBtn2 = document.querySelector(".newBottonBtn2");
    const condition = year > 0 && month > 0 && date > 0;
    changeBtnColor(condition, titleOval2, newBottonBtn2);
  }, [year, month, date]);

  // 이메일 관련 함수
  useEffect(() => {
    const titleOval3 = document.querySelector(".titleOval3");
    const newBottonBtn3 = document.querySelector(".newBottonBtn3");
    const condition = email.length > 0;
    changeBtnColor(condition, titleOval3, newBottonBtn3);
  }, [email]);

  // 공통 함수
  const fitLength = (value, maxlength) => {
    return value.length > maxlength ? value.substr(0, maxlength) : value;
  };

  const changeBtnColor = (condition, titleOval, bottonBtn) => {
    if (condition) {
      titleOval.style.backgroundColor = "#7F7F7F";
      bottonBtn.style.backgroundColor = "#494949";
      setBtnDisabled(false);
    } else {
      titleOval.style.backgroundColor = "rgba(73, 73, 73, 0.2)";
      bottonBtn.style.backgroundColor = "rgba(73, 73, 73, 0.2)";
      setBtnDisabled(true);
    }
  };

  const backToStep = () => {
    const mainContainerList = document.querySelectorAll(".mainContainer");
    if (step !== 1) {
      mainContainerList[step - 2].id = "";
      mainContainerList[step - 1].id = "hide";
      setStep((present) => present + 1);
    } else {
      console.log("초기 사이트로 이동");
    }
  };

  const moveToStep = () => {
    const mainContainerList = document.querySelectorAll(".mainContainer");
    if (step !== mainContainerList.length) {
      mainContainerList[step].id = "";
      mainContainerList[step - 1].id = "hide";
      setStep((present) => present + 1);
    } else {
      console.log("다음 사이트로 이동");
    }
  };

  return (
    <>
      {/* Step1 : 이름 입력하기 */}
      <MainContainer id="" className="mainContainer">
        <BackBtn onClick={backToStep} />
        <TitleOval className="titleOval1">이름 입력하기</TitleOval>
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
        <NewBottonBtn
          id="1"
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn1"
        >
          다음
        </NewBottonBtn>
      </MainContainer>

      {/* Step2 : 생년월일 입력하기 */}
      <MainContainer id="hide" className="mainContainer">
        <BackBtn onClick={backToStep} />
        <TitleOval className="titleOval2">생년월일 입력하기</TitleOval>
        <BirthInput>
          저는
          <br />
          <input
            type="number"
            className="year"
            placeholder="2024"
            value={year}
            maxLength={4}
            onChange={onBirthChange}
            autoFocus
          />
          년
          <input
            type="number"
            className="month"
            placeholder="01"
            value={month}
            maxLength={2}
            onChange={onBirthChange}
          />
          월
          <input
            type="number"
            className="date"
            placeholder="01"
            value={date}
            maxLength={2}
            onChange={onBirthChange}
          />
          일에
          <br />
          태어났어요.
        </BirthInput>
        <NewBottonBtn
          id={2}
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn2"
        >
          다음
        </NewBottonBtn>
      </MainContainer>

      {/* Step3 : 이메일 입력하기 */}
      <MainContainer id="hide" className="mainContainer">
        <BackBtn onClick={backToStep} />
        <TitleOval className="titleOval3">이메일 입력하기</TitleOval>
        <ColorfulInput>
          제 이메일은
          <br />
          <input
            type="text"
            placeholder="voyage@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          입니다.
        </ColorfulInput>
        <NewBottonBtn
          id="3"
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn3"
        >
          다음
        </NewBottonBtn>
      </MainContainer>
    </>
  );
};

export default InputInfo;

const NameInput = styled(ColorfulInput)`
  input {
    width: 160px;
  }
`;

const BirthInput = styled(ColorfulInput)`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:nth-child(2) {
    width: 115px;
  }
  input:nth-child(3) {
    width: 50px;
    margin-left: 10px;
  }
  input:nth-child(4) {
    width: 50px;
    margin-left: 10px;
  }
`;

const NewBottonBtn = styled(BottonBtn)`
  margin: auto auto 56px auto;
`;
