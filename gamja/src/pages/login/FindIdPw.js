import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import MainContainer from "../../components/login/MainContainer";
import BottonBtn from "../../components/login/BottonBtn";
import LogoImage from "../../components/login/LogoImage";
import InputStyle from "../../components/login/InputStyle";
import InputLabel from "../../components/login/InputLabel";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const FindIdPw = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const path = "/login/findId";

  const onChange = (e) => {
    const target = e.target.id;
    const value = e.target.value;
    if (target === "Name") {
      setName(value);
    } else if (target === "Email") {
      setEmail(value);
    } else {
      setId(value);
    }
  };

  useEffect(() => {
    if ((id || name) && email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, id]);

  function findId(name, email) {
    // console.log(name, email);
    axios
      .get(`${Server_IP}/users/get-user-id/?name=${name}&email=${email}`)
      .then((response) => {
        const username = response.data.username;
        navigate("/login/findId/result", {
          state: { username: username },
        });
      })
      .catch((error) => {
        alert("이름 또는 이메일이 틀렸습니다.");
        console.log(error);
      });
  }

  function findPw(id, email) {
    axios
      .get(`${Server_IP}/users/reset-user-pw/?username=${id}&email=${email}`)
      .then((response) => {
        const password = response.data.new_password;
        navigate("/login/findPw/result", {
          state: { password: password },
        });
      })
      .catch((error) => {
        alert("아이디 또는 이메일이 틀렸습니다.");
        console.log(error);
      });
  }

  return (
    <MainContainer>
      <FindContainer>
        <NewLogoImage />
        {location === path ? (
          <>
            {/* 아이디 찾기 */}
            <InputDiv>
              <InputLabel htmlFor="Name">이름</InputLabel>
              <NewInputStyle
                id="Name"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={onChange}
              />
            </InputDiv>
            <InputDiv>
              <InputLabel htmlFor="Email">이메일</InputLabel>
              <NewInputStyle
                id="Email"
                placeholder="가입 이메일을 입력해주세요"
                value={email}
                onChange={onChange}
              />
            </InputDiv>
            <FindBottonBtn
              disabled={disabled}
              onClick={() => findId(name, email)}
            >
              아이디 찾기
            </FindBottonBtn>
          </>
        ) : (
          <>
            {/* 비밀번호 찾기 */}
            <InputDiv>
              <InputLabel htmlFor="Id">아이디</InputLabel>
              <NewInputStyle
                id="Id"
                placeholder="아이디을 입력해주세요"
                value={id}
                onChange={onChange}
              />
            </InputDiv>
            <InputDiv>
              <InputLabel htmlFor="Email">이메일</InputLabel>
              <NewInputStyle
                id="Email"
                placeholder="가입 이메일을 입력해주세요"
                value={email}
                onChange={onChange}
              />
            </InputDiv>
            <FindBottonBtn
              disabled={disabled}
              onClick={() => findPw(id, email)}
            >
              비밀번호 찾기
            </FindBottonBtn>
          </>
        )}
      </FindContainer>
    </MainContainer>
  );
};

export default FindIdPw;

const FindContainer = styled.div`
  display: flex;
  width: 479px;
  height: 720px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
`;

const NewLogoImage = styled(LogoImage)`
  width: 152px;
  height: 152px;
  margin-top: 51px;
  margin-bottom: 78px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 25px;
`;

const NewInputStyle = styled(InputStyle)`
  width: 326px;
  height: 19px;
  font-size: 15px;
`;

const FindBottonBtn = styled(BottonBtn)`
  margin-top: 92px;
  width: 386px;
  height: 64px;
  border-radius: 10px;
  background-color: #494949;
  font-size: 25px;
`;
