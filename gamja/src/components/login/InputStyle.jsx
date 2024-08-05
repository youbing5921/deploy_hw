import styled from "styled-components";

const InputStyle = styled.input`
  width: 440px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgba(73, 73, 73, 0.2);
  background: #f8f8f8;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  padding: 17px 30px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: rgba(73, 73, 73, 0.5);
  }
`;

export default InputStyle;
