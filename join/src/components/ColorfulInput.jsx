import styled from "styled-components";

// input의 width 조절 필요
const InputDiv = styled.div`
  color: #494949;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 81px;

  input {
    height: 77px;
    border: 0px;
    font-family: Pretendard;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 10;
    background: linear-gradient(to right, #03aed2, #fdde55);
    color: transparent;
    background-clip: text;
    caret-color: #dbdbdb;
  }
  input::placeholder {
    color: #dbdbdb;
    background: transparent;
    padding-bottom: 1px;
  }
  input:focus {
    outline: none;
  }
`;

export default InputDiv;
