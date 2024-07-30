import React from "react";
import styled from "styled-components";

const Checkbox = ({ element, onChange }) => {
  const id = element.id;
  const text = element.text;
  const required = element.required;
  const detail = element.detail;

  if (required) {
    return (
      <InputDiv>
        <input
          id={id}
          className="required"
          type="checkbox"
          required={true}
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
  } else {
    return (
      <InputDiv>
        <input id={id} type="checkbox" required={false} onChange={onChange} />
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
  width: 440px;
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

const LabelStyle = styled.label`
  color: #a4a4a4;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
