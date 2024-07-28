import React from "react";
import styled from "styled-components";
import Arrow from "../../images/Arrow.svg";

const UserInfo = ({ profilImg, $categoryColor, $categoryBg, Info }) => {
  return (
    <>
      {Info.map((info) => (
        <ProfileBox key={info.id}>
          <Profile src={profilImg} alt="profileImg" />
          <NameBox>
            <Username>{info.name}</Username>
            <Next src={Arrow} alt="바로가기" />
          </NameBox>
          <CategoryBox>
            {info.category.map((cat, idx) => (
              <Category
                key={idx}
                $categoryColor={$categoryColor}
                $categoryBg={$categoryBg}
              >
                {cat}
              </Category>
            ))}
          </CategoryBox>
        </ProfileBox>
      ))}
    </>
  );
};

export default UserInfo;

const ProfileBox = styled.div`
  display: flex;
  width: 157px;
  padding: 30px 0px;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: #f8f8f8;
`;

const Profile = styled.img`
  width: 78px;
  height: 78px;
  margin-bottom: 19px;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  margin-bottom: 9px;
`;

const Username = styled.div`
  color: #494949;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const Next = styled.img`
  width: 6.477px;
  height: 10.983px;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5px;
`;

const Category = styled.div`
  display: inline-block;
  padding: 3px 9px;
  border-radius: 9px;
  background: ${(props) => props.$categoryBg || "rgba(3, 174, 210, 0.2)"};
  color: ${(props) => props.$categoryColor || "#03aed2"};
  text-align: center;
  font-size: 8px;
  font-weight: 500;
`;
