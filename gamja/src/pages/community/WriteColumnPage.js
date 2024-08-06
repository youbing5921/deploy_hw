import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/community/TopBar";
import Today from "../../components/community/Today";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;
const categoryList = [
  "가치관",
  "재테크",
  "사랑",
  "생활지식",
  "인간관계",
  "진로",
];

const WriteColumnPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.pathname.substring(11);
  const column_id = mode === "modify" ? location.state.column_id : -1;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState("");
  const formData = new FormData();

  const selectCategory = (e) => {
    if (mode === "write") {
      const form = document.querySelector("#category");
      setCategories([parseInt(e.target.value)]);
      form.style.backgroundColor = "rgba(3, 174, 210, 0.20)";
      form.style.color = "#03AED2";
      alert("카테고리는 수정이 안되니 다시 한 번 확인해주시기 바랍니다.");
    }
  };

  const loadImage = (e) => {
    const temp = e.target.files[0];
    // console.log(temp);
    if (!temp) {
      return;
    }
    setImage(temp);
    const imgLoad = document.querySelector("#imgLoad");
    imgLoad.src = "/img/loadedImage.svg";
    alert(
      "이미지가 업로드되었습니다.\n이미지는 수정이 안되니 신중하게 선택해주시기 바랍니다."
    );
  };

  function uploadCol() {
    if (title === "") {
      alert("제목을 입력해주시기 바랍니다.");
      return;
    }
    if (categories.length === 0) {
      alert("카테고리를 선택해주시기 바랍니다.");
      return;
    }
    if (content === "") {
      alert("내용을 입력해주시기 바랍니다.");
      return;
    }

    formData.append("title", title);
    formData.append("content", content);
    formData.append("categories", categories);

    if (mode === "write") {
      formData.append("image", image);
      axios
        .post(`${Server_IP}/community/columns/`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => navigate(-1))
        .catch((error) => console.log(error));
    } else if (mode === "modify") {
      axios
        .patch(`${Server_IP}/community/columns/${column_id}/`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => navigate(-1))
        .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    if (mode === "modify") {
      const imgLoad = document.querySelector("#imgLoad");
      imgLoad.style.display = "none";

      axios
        .get(`${Server_IP}/community/columns/${column_id}/`)
        .then((response) => {
          const data = response.data;
          // console.log(data);
          setTitle(data.title);
          setCategories([data.categories[0].name]);
          setContent(data.content);
          setImage(data.image);
          checkCategory(data.categories[0].name);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkCategory = (name) => {
    const category = String(categoryList.indexOf(name) + 2);
    const doc = document.querySelector(`option:nth-child(${category})`);
    doc.selected = true;
    const form = document.querySelector("#category");
    form.style.backgroundColor = "rgba(3, 174, 210, 0.20)";
    form.style.color = "#03AED2";
  };

  return (
    <Container>
      <TopContainer>
        <TopBar
          txt={"커뮤니티"}
          onClick={() => navigate("/community")}
          noSearch={true}
        />
      </TopContainer>
      <Column>
        <Header>
          <ColTitle>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              autoFocus
              maxLength={15}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ColCategory
              style={{ display: mode === "write" ? "flex" : "none" }}
            >
              <select id="category" onChange={selectCategory} defaultValue={0}>
                <option disabled hidden value={0}>
                  카테고리 설정
                </option>
                {categoryList.map((elt, idx) => (
                  <option key={idx} value={idx + 1}>
                    {elt}
                  </option>
                ))}
              </select>
            </ColCategory>
          </ColTitle>
          <ColInfo>
            <p>
              by {localStorage.getItem("name")} • <Today />
            </p>
            <InputImg>
              <input
                type="file"
                accept="image/*"
                id="input"
                onChange={loadImage}
              />
              <label htmlFor="input">
                <img
                  src="/img/loadImage.svg"
                  id="imgLoad"
                  alt="이미지 불러오기"
                  style={{ cursor: mode === "write" ? "pointer" : "auto" }}
                />
              </label>
            </InputImg>
          </ColInfo>
        </Header>
        <HorizonLine />
        <MainText>
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </MainText>
      </Column>
      <WriteCol>
        <button onClick={uploadCol}>칼럼 올리기</button>
      </WriteCol>
    </Container>
  );
};

export default WriteColumnPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  width: 600px;
  height: 1230px;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopContainer = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
`;

const Column = styled.div`
  min-height: 971px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  padding: 10px 40px;
  gap: 30px;
`;

const ColTitle = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 370px;
    color: #494949;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.66px;
    background-color: transparent;
    border: 0;
    &:focus {
      outline: 0;
    }
  }
`;

const ColCategory = styled.div`
  margin-left: auto;
  height: 18px;
  justify-content: center;
  align-items: center;

  select {
    padding: 8px 13px;
    border-radius: 20px;
    background: rgba(73, 73, 73, 0.2);
    border: 0;

    color: #494949;
    text-align: left;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ColInfo = styled.div`
  width: 520px;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    color: #494949;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.33px;
  }
`;

const InputImg = styled.div`
  margin: auto 7px auto auto;
  input {
    display: none;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const HorizonLine = styled.hr`
  width: 520px;
  height: 0.5px;
  border: 0;
  background-color: rgba(73, 73, 73, 0.5);
  margin-top: 26px;
  margin-bottom: 35px;
`;

const MainText = styled.p`
  margin: 0 40px;
  textarea {
    width: 520px;
    height: 770px;
    background-color: transparent;
    padding: 0;
    border: 0;
    outline: 0;
    resize: none;

    color: #7f7f7f;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.44px;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: gray;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #03aed2;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }

    /* hover 효과 */
    &::-webkit-scrollbar-thumb:hover {
      background-color: blue;
    }

    /* 코너에 라운드 효과 */
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
    }
  }
`;

const WriteCol = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 600px;
  height: 107px;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
  button {
    border-radius: 15px;
    background: #03aed2;
    width: 229px;
    height: 53px;
    border: 0;
    cursor: pointer;

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
