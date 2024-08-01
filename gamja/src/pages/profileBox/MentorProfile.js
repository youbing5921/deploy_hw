import React from "react";
import styled from "styled-components";

const userInfo = [
  {
    id: "1",
    name: "가가가",
    category: ["가치관", "사랑", "생활지식"],
    count: [10, 10, 2],
    rating: 50,
  },
];

const MentorProfile = () => {
  return (
    <>
      <Container>
        <MentorBox></MentorBox>
      </Container>
    </>
  );
};

export default MentorProfile;

const Container = styled.div`
  background: rgba(248, 248, 248, 0.85);
  margin: 0 auto;
  padding: 267px 86px;
`;
const MentorBox = styled.div`
  width: 428px;
  height: 696px;
  border-radius: 20px;
  background: linear-gradient(200deg, #fff8dd 0.49%, #fdde55 99.51%);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
`;
