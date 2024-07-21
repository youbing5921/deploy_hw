import React, { useState } from "react";
import styled from "styled-components";

const categories = [
  "전체",
  "가치관",
  "사랑",
  "생활",
  "인간관계",
  "재테크",
  "진로",
];

const CategoryBar = () => {
  const [selectCategory, setSelectCategory] = useState("전체");

  const onClickCategory = (category) => {
    setSelectCategory(category);
  };

  return (
    <>
      <Categorys>
        {categories.map((category) => (
          <Category
            key={category}
            isActive={selectCategory === category}
            onClick={() => onClickCategory(category)}
          >
            {category}
          </Category>
        ))}
      </Categorys>
    </>
  );
};

export default CategoryBar;

const Categorys = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 40px;
  margin-bottom: 28px;
`;

const Category = styled.div`
  color: ${(props) => (props.isActive ? "#000" : "#a4a4a4")};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.44px;
  cursor: pointer;
`;
