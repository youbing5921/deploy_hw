import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import styled from "styled-components";
import MainContainer from "../../components/join/MainContainer";
import BottonBtn from "../../components/join/BottonBtn";
import BackBtn from "../../components/join/BackBtn";
import TitleOval from "../../components/join/TitleOval";
import ColorfulInput from "../../components/join/ColorfulInput";
import { useNavigate } from "react-router-dom";

const InputInfo = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [step, setStep] = useState(1);

  const textarea = useRef();
  const navigate = useNavigate();

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
  const onEmailChange = (e) => {
    const value = fitLength(e.target.value, 24);
    setEmail(value);
    handleResizeHeight();
  };

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto"; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  useEffect(() => {
    const titleOval3 = document.querySelector(".titleOval3");
    const newBottonBtn3 = document.querySelector(".newBottonBtn3");
    const condition = email.length > 0;
    changeBtnColor(condition, titleOval3, newBottonBtn3);
  }, [email]);

  // 아이디 관련 함수
  useEffect(() => {
    const titleOval4 = document.querySelector(".titleOval4");
    const newBottonBtn4 = document.querySelector(".newBottonBtn4");
    const condition = userId.length > 0;
    changeBtnColor(condition, titleOval4, newBottonBtn4);
  }, [userId]);

  // 비밀번호 관련 함수
  useEffect(() => {
    const titleOval5 = document.querySelector(".titleOval5");
    const newBottonBtn5 = document.querySelector(".newBottonBtn5");
    const condition = password.length > 0;
    changeBtnColor(condition, titleOval5, newBottonBtn5);
  }, [password]);

  // 멘토/멘티 관련 함수
  const onRoleClick = (e) => {
    const mentoDiv = document.querySelector("#mentoDiv");
    const mentiDiv = document.querySelector("#mentiDiv");
    const chosenRole = e.target.value;

    if (role === chosenRole) {
      mentoDiv.className = "";
      mentiDiv.className = "";
      setRole("");
    } else {
      if (chosenRole === "mento") {
        mentoDiv.className = "mentoChosen";
        mentiDiv.className = "notChosen";
      } else {
        mentiDiv.className = "mentiChosen";
        mentoDiv.className = "notChosen";
      }
      setRole(chosenRole);
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    const titleOval6 = document.querySelector(".titleOval6");
    const newBottonBtn6 = document.querySelector(".newBottonBtn6");
    const condition = role !== "";
    changeBtnColor(condition, titleOval6, newBottonBtn6);
  }, [role]);

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

  const mainContainerList = document.querySelectorAll(".mainContainer");
  const backToStep = () => {
    if (step !== 1) {
      mainContainerList[step - 2].id = "";
      mainContainerList[step - 1].id = "hide";
      setStep((present) => present - 1);
    } else {
      navigate("/join/tos");
    }
  };

  const moveToStep = () => {
    if (step !== mainContainerList.length) {
      mainContainerList[step].id = "";
      mainContainerList[step - 1].id = "hide";
      setStep((present) => present + 1);
      setBtnDisabled(true);
    } else {
      navigate(role === "mento" ? "/join/category" : "/join/complete", {
        state: {
          role: role,
          info: {
            username: userId,
            email: email,
            password: password,
            is_mentor: role === "mento" ? true : false,
            name: name,
            birth_date: `${year}-${month}-${date}`,
            agreed_to_terms: true,
          },
        },
      });
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Step1 : 이름 입력하기 */}
      <MainContainer className="mainContainer">
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
          <TextareaStyle
            className="emailInput"
            placeholder="voyage@gmail.com"
            value={email}
            onChange={onEmailChange}
            ref={textarea}
            rows={1}
            autoFocus
          />
          입니다.
        </ColorfulInput>
        <NewBottonBtn
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn3"
        >
          다음
        </NewBottonBtn>
      </MainContainer>

      {/* Step4 : 아이디 입력하기 */}
      <MainContainer id="hide" className="mainContainer">
        <BackBtn onClick={backToStep} />
        <TitleOval className="titleOval4">아이디 설정하기</TitleOval>
        <ColorfulInput>
          제 아이디는
          <br />
          <input
            type="text"
            placeholder="voyage123"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            autoFocus
          />
          입니다.
        </ColorfulInput>
        <NewBottonBtn
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn4"
        >
          다음
        </NewBottonBtn>
      </MainContainer>

      {/* Step5 : 비밀번호 입력하기 */}
      <MainContainer id="hide" className="mainContainer">
        <BackBtn onClick={backToStep} />
        <TitleOval className="titleOval5">비밀번호 설정하기</TitleOval>
        <ColorfulInput>
          제 비밀번호는
          <br />
          <input
            type="text"
            placeholder="Chungpa03"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          입니다.
        </ColorfulInput>
        <NewBottonBtn
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn5"
        >
          다음
        </NewBottonBtn>
      </MainContainer>

      {/* Step6 : 멘토/멘티 선택하기 */}
      <MainContainer id="hide" className="mainContainer">
        <BackBtn onClick={backToStep} />
        <TitleOval className="titleOval6">역할 설정</TitleOval>
        <RoleChoosingText>
          마지막으로 보이지에서의 역할을
          <br />
          선택해주세요.
        </RoleChoosingText>
        <MentoMentiBtn>
          <label>
            <input type="radio" value="mento" onClick={onRoleClick} />
            <div id="mentoDiv">
              <h3>멘토</h3>
              <p>인생 후배들의 등대가 되어주세요 !</p>
            </div>
          </label>
          <label>
            <input type="radio" value="menti" onClick={onRoleClick} />
            <div id="mentiDiv">
              <h3>멘티</h3>
              <p>인생이라는 바다를 함께 항해해요!</p>
            </div>
          </label>
        </MentoMentiBtn>
        <NewBottonBtn
          disabled={btnDisabled}
          onClick={moveToStep}
          className="newBottonBtn6"
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
    width: 140px;
  }
`;

const BirthInput = styled(ColorfulInput)`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:nth-child(2) {
    width: 135px;
  }
  input:nth-child(3) {
    width: 65px;
    margin-left: 15px;
  }
  input:nth-child(4) {
    width: 65px;
    margin-left: 15px;
  }
`;

const TextareaStyle = styled.textarea`
  all: unset;
  display: block;
  width: 520px;
  height: auto;
  //height: 77px;
  white-space: normal;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  background: linear-gradient(to right, #03aed2, #fdde55);
  color: transparent;
  background-clip: text;
  caret-color: #dbdbdb;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const RoleChoosingText = styled(ColorfulInput)`
  font-size: 35px;
`;

const MentoMentiBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 115px;
  width: 520px;
  gap: 20px;
  cursor: pointer;
  input {
    display: none;
  }
  div {
    width: 440px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    h3 {
      margin: 0px;
      color: #494949;
      font-family: Pretendard;
      text-align: center;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #494949;
      margin: 0px;
      text-align: center;
      font-family: Pretendard;
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  #mentoDiv:hover,
  .mentoChosen {
    background: linear-gradient(261deg, #cdeff6 0%, #03aed2 87.2%);
    h3 {
      color: white;
    }
    p {
      color: white;
    }
  }
  #mentiDiv:hover,
  .mentiChosen {
    background: linear-gradient(260deg, #ffeca1 0%, #ffd30f 100%);
    h3 {
      color: white;
    }
    p {
      color: white;
    }
  }
  .notChosen {
    h3 {
      color: rgba(73, 73, 73, 0.2);
    }
    p {
      display: none;
    }
  }
`;

const NewBottonBtn = styled(BottonBtn)`
  margin: auto auto 56px auto;
`;
