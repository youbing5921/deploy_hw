import React from "react";
import styled from "styled-components";

const Checkbox = ({ element }) => {
  const id = element.id;
  const text = element.text;
  const required = element.required;
  const detail = element.detail;
  const inputAll = Array.prototype.slice.call(
    document.querySelectorAll(".smallInput")
  );
  const container = document.querySelector("#totalInputDiv");

  const onTotalChange = () => {
    if (container.style.backgroundColor !== "rgb(73, 73, 73)") {
      container.style.backgroundColor = "#494949";
      inputAll.forEach((elt) => {
        elt.checked = true;
      });
    } else {
      container.style.backgroundColor = "#f8f8f8";
      inputAll[5].checked = false;
    }
  };

  const onChange = () => {
    // 여기부터 수정 필요
    inputAll.every((elt) => {
      if (elt.checked === false) {
        console.log(elt);
      } else {
        container.querySelector("input").checked = true;
        console.log(elt);
      }
    });
  };

  if (id === 0) {
    return (
      <TotalInputDiv id="totalInputDiv">
        <input
          id={id}
          type="checkbox"
          required={required}
          onChange={onTotalChange}
        />
        <TotalLabelStyle htmlFor={id}>{text}</TotalLabelStyle>
      </TotalInputDiv>
    );
  } else {
    return (
      <InputDiv>
        <input
          id={id}
          className="smallInput"
          type="checkbox"
          required={required}
          onChange={onChange}
        />
        <LabelStyle htmlFor={id}>{text}</LabelStyle>
        {detail !== null ? (
          <DetailStyle id={id} href="" detail={detail}>
            보기
          </DetailStyle>
        ) : null}
      </InputDiv>
    );
  }
};

const InputDiv = styled.div`
  display: flex;
  width: 520px;
  padding: 22px 20px 22px 20px;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  input[type="checkbox"] {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #a4a4a4;
    background-color: #f8f8f8;
    &:checked {
      background-image: url("/img/check.svg");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
    }
    &:checked + label {
      color: #494949;
    }
  }
`;

const TotalInputDiv = styled(InputDiv)`
  border-radius: 20px;
  border: 1px solid #a4a4a4;
  input[type="checkbox"] {
    &:checked + label {
      color: #fff;
    }
    &:checked + #totalInputDiv {
      background: #494949;
    }
  }
`;

const LabelStyle = styled.label`
  color: #a4a4a4;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TotalLabelStyle = styled(LabelStyle)`
  /* color: #fff; */
`;

const DetailStyle = styled.a`
  margin-left: auto;
  color: #a4a4a4;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Checkbox;
