import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const categories = [
  "전체",
  "가치관",
  "사랑",
  "생활지식",
  "인간관계",
  "재테크",
  "진로",
];

const is_mentor = localStorage.getItem("is_mentor") === "true";

const CategoryBar = ({ id, onSelectCategory, search }) => {
  const [selectCategory, setSelectCategory] = useState("전체");
  const [searchText, setSearchText] = useState("");

  const onClickCategory = (category) => {
    setSelectCategory(category);
    onSelectCategory(category);
  };

  return (
    <Categories>
      <CategoryBox id={id}>
        {categories.map((category) => (
          <Category
            key={category}
            $isactive={selectCategory === category}
            onClick={() => onClickCategory(category)}
          >
            {category}
          </Category>
        ))}
      </CategoryBox>
      <SearchBar id="searchBar">
        <input
          value={searchText}
          placeholder="제목을 입력해주세요"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </SearchBar>
      <SearchSubmit
        id="searchSubmit"
        src={`/img/search${is_mentor ? "Mentor" : "Mentee"}Btn.svg`}
        onClick={() => search(searchText)}
      />
    </Categories>
  );
};

export default CategoryBar;

const Categories = styled.div`
  display: flex;
  width: 600px;
  height: 71px;
`;

const CategoryBox = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-between;
  padding: 23px 40px;
`;

const Category = styled.div`
  color: ${(props) => (props.$isactive ? "#000" : "#a4a4a4")};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: none;
  width: 490px;
  height: 38px;
  padding: 3px 10px 3px 20px;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  border-radius: 100px;
  background: #f6f6f6;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1) inset;

  input {
    border: 0;
    outline: 0;
    width: 450px;
    background-color: transparent;

    color: #494949;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const SearchSubmit = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 50px;
  top: 112px;
  cursor: pointer;
`;
