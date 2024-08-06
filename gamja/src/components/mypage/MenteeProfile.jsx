import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../images/Arrow.svg";
import MentorImg from "../../images/MentorImg.svg";

const MenteeProfile = ({ Info }) => {
  const navigate = useNavigate();
  const alertEdit = () => {
    if (!window.confirm("회원정보를 수정하시겠습니까?")) {
      return;
    } else {
      navigate("/mypage/mentee/edit");
    }
  };

  return (
    <ProfileBox>
      <Profile src={MentorImg} alt="profileImg" />
      <NameBox>
        <Username>{Info.name}</Username>
        <Next src={Arrow} alt="바로가기" onClick={alertEdit} />
      </NameBox>
    </ProfileBox>
  );
};

export default MenteeProfile;

const ProfileBox = styled.div`
  display: flex;
  height: 117px;
  width: 101px;
  padding: 19px 24px;
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
  gap: 9px;
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
