import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../images/Arrow.svg";
import MenteeImg from "../../images/MenteeImg.svg";

const UserInfo = ({ Info }) => {
  const alertEdit = () => {
    if (!window.confirm("회원정보를 수정하시겠습니까?")) {
      return;
    } else {
      navigate("/mypage/mentor/edit");
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <ProfileBox>
        <Profile src={MenteeImg} alt="profileImg" />
        <NameBox>
          <Username>{Info.name}</Username>
          <Next src={Arrow} alt="바로가기" onClick={alertEdit} />
        </NameBox>
        <CategoryContainer>
          {Info.info?.interests_display.map((interest, idx) => (
            <CategoryBox key={idx}>
              <Category>{interest.name}</Category>
            </CategoryBox>
          ))}
        </CategoryContainer>
      </ProfileBox>
    </>
  );
};

export default UserInfo;

const ProfileBox = styled.div`
  display: flex;
  width: 157px;
  padding: 38px 0px;
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
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  display: inline-block;
  padding: 3px 5px;
  border-radius: 10px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
`;
