import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CommunityContainer = ({ communityList, toggleSubscription }) => {
  const navigate = useNavigate();

  const onClick = (column) => {
    navigate(`/community/${column.id}`, {
      state: {
        column: column,
      },
    });
  };

  return (
    <ListContainer>
      {communityList.map((column) => (
        <ColumnBox key={column.id} onClick={() => onClick(column)}>
          <Profile src="/img/communitySampleImage.svg" />
          <Content>
            <Category>{column.category}</Category>
            <Title>{column.title}</Title>
            <Username>{column.writer}</Username>
          </Content>
          <SubscribeButton onClick={() => toggleSubscription(column.id)}>
            <img
              src={`/img/Follow${column.isSubscribed ? "Blue" : "Gray"}.svg`}
              alt={column.isSubscribed ? "Following" : "NotFollow"}
            />
          </SubscribeButton>
        </ColumnBox>
      ))}
    </ListContainer>
  );
};

export default CommunityContainer;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.5px;
  padding: 0px 40px 25px 40px;
`;

const ColumnBox = styled.div`
  border-radius: 20px;
  background: #f8f8f8;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Profile = styled.img`
  width: 129px;
  height: 94px;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Category = styled.div`
  display: flex;
  padding: 3px 9px;
  width: fit-content;
  border-radius: 20px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Title = styled.div`
  color: #494949;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Username = styled.div`
  color: #494949;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubscribeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 8.5px 7px auto auto;
  img {
    width: 15px;
    height: 20px;
  }
`;
