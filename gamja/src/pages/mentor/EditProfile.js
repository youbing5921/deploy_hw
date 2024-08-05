import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TitleOval from "../../components/categoryAndMatching/TitleOval";
import CategoryOval from "../../components/chat/CategoryOval";
import BottonBtn from "../../components/categoryAndMatching/BottonBtn";
import TopBar from "../../components/common/TopBar";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const EditProfile = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const userId = localStorage.getItem("user_id");
  const accessToken = localStorage.getItem("access");

  const toggleCategory = (value) => {
    setCategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((cat) => cat !== value);
      } else if (prev.length < 3) {
        return [...prev, value];
      }
      return prev;
    });
  };

  useEffect(() => {
    setDisabled(category.length === 0 || name.length === 0);
  }, [category, name]);

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
  const handleSubmit = () => {
    const data = {
      name: name,
      interests: category,
    };

    axios
      .patch(`${Server_IP}/users/users/${userId}/`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        alert("회원정보 수정이 완료되었습니다.");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
        alert("이름을 입력해 주세요.");
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
        <StyledCategoryOval $active={category.length > 0}>
          카테고리 설정
        </StyledCategoryOval>
        <ButtonGroup>
          {["가치관", "재테크", "사랑", "생활지식", "인간관계", "진로"].map(
            (item) => (
              <StyledButton
                key={item}
                onClick={() => toggleCategory(item)}
                $active={category.includes(item)}
              >
                {item}
              </StyledButton>
            )
          )}
        </ButtonGroup>
        <SideText>최대 3개의 카테고리를 선택해주세요.</SideText>
        <ChatBtn disabled={disabled} $active={!disabled} onClick={handleSubmit}>
          회원정보 저장하기
        </ChatBtn>
      </Wrapper>
    </Container>
  );
};

export default EditProfile;

const Container = styled.div`
  background-color: #ebebeb;
  width: 600px;
  margin: 0 auto;
  height: 1230px;
`;

const Wrapper = styled.div`
  padding: 0 40px;
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
const Text = styled.div`
  color: #7f7f7f;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  margin-top: 14px;
`;

const SideText = styled.div`
  color: #7f7f7f;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  padding: 14px 0 420px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 25px;
`;

const StyledButton = styled.button`
  appearance: none;
  border: 0;
  padding: 9px 25px;
  border-radius: 30px;
  border: ${({ $active }) =>
    $active ? "1px solid #03AED2" : "1px solid rgba(73, 73, 73, 0.2)"};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), #03AED2"
      : "rgba(73, 73, 73, 0.1)"};
  color: ${({ $active }) => ($active ? "#fff" : "#7f7f7f")};
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0px 0px 8px 0px rgba(3, 174, 210, 0.20)" : "none"};
`;

const ChatBtn = styled(BottonBtn)`
  margin-top: auto;
  background: ${({ $active }) =>
    $active ? "#494949" : "rgba(73, 73, 73, 0.20)"};
  cursor: ${({ $active }) => ($active ? "pointer" : "not-allowed")};
`;

const StyledCategoryOval = styled(CategoryOval)`
  background: ${({ $active }) =>
    $active ? "#7f7f7f" : "rgba(73, 73, 73, 0.10)"};
  border: ${({ $active }) => ($active ? "#7f7f7f" : "rgba(73, 73, 73, 0.10)")};
`;

const StyledTitleOval = styled(TitleOval)`
  background: ${({ $active }) =>
    $active ? "#7f7f7f" : "rgba(73, 73, 73, 0.10)"};
  border: ${({ $active }) => ($active ? "#7f7f7f" : "rgba(73, 73, 73, 0.10)")};
`;
