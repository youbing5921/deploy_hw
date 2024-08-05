import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TitleOval from "../../components/categoryAndMatching/TitleOval";
import BottonBtn from "../../components/categoryAndMatching/BottonBtn";
import TopBar from "../../components/common/TopBar";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const EditMentee = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const userId = localStorage.getItem("user_id");
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    setDisabled(name.length === 0);
  }, [name]);

  useEffect(() => {
    axios
      .get(`${Server_IP}/my-page/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const initValue = response.data;
        setName(initValue.name || "");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accessToken]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const patchMenteeName = () => {
    axios
      .patch(
        `${Server_IP}/users/users/${userId}/`,
        {
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        setName(response.data.name);
        alert("회원정보 수정이 완료되었습니다.");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <TopBar txt="마이페이지" marginLeft={"154px"} />
      <Wrapper>
        <StyledTitleOval $active={name.length > 0}>이름 변경</StyledTitleOval>
        <NameInput
          placeholder="새로운 이름을 정해주세요"
          value={name}
          onChange={handleNameChange}
        />
        {name.length !== 0 && <Text>새로운 이름을 정해주세요</Text>}
        <ChatBtn
          disabled={disabled}
          $active={!disabled}
          onClick={patchMenteeName}
        >
          회원정보 저장하기
        </ChatBtn>
      </Wrapper>
    </Container>
  );
};

export default EditMentee;

const Container = styled.div`
  background-color: #ebebeb;
  width: 600px;
  margin: 0 auto;
  height: 1230px;
`;

const Wrapper = styled.div`
  padding: 0 40px;
`;

const Text = styled.div`
  color: #7f7f7f;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  margin-top: 14px;
`;

const NameInput = styled.input`
  margin-top: 19px;
  color: #494949;
  font-family: Pretendard;
  font-size: 35px;
  font-weight: 700;
  border: none;
  background: none;
  outline: none;

  &::placeholder {
    color: rgba(73, 73, 73, 0.2);
  }
`;

const ChatBtn = styled(BottonBtn)`
  margin-top: 760px;
  background: ${({ $active }) =>
    $active ? "#494949" : "rgba(73, 73, 73, 0.20)"};
  cursor: ${({ $active }) => ($active ? "pointer" : "not-allowed")};
`;
const StyledTitleOval = styled(TitleOval)`
  background: ${({ $active }) =>
    $active ? "#7f7f7f" : "rgba(73, 73, 73, 0.10)"};
  border: ${({ $active }) => ($active ? "#7f7f7f" : "rgba(73, 73, 73, 0.10)")};
`;
