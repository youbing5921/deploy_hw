import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MentorImg from "../../images/MentorImg.svg";
import axios from "axios";

const Server_IP = process.env.REACT_APP_Server_IP;

const MoreReview = ({ reviewId }) => {
  const [reviews, setReviews] = useState([]);
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    const getReviewMore = () => {
      // console.log(reviewId);
      axios
        .get(`${Server_IP}/review/${reviewId}/mentors/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setReviews(response.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getReviewMore();
  }, [accessToken, reviewId]);

  return (
    <>
      {reviews?.map((review) => (
        <Container key={review.id}>
          <Top>
            <Left>
              <Low>
                <Profile src={MentorImg} alt="mentorImg" />
              </Low>
              <Middle>
                <Username>{review.mentee_name}</Username>
                <CategoryBox>
                  {review.chatroom.interests?.map((interest, idx) => (
                    <Category key={idx}>{interest.name}</Category>
                  ))}
                </CategoryBox>
              </Middle>
            </Left>
          </Top>
          <Comment>{review.content}</Comment>
        </Container>
      ))}
    </>
  );
};

export default MoreReview;

const Container = styled.div`
  margin-top: 5px;
  border-radius: 15px;
  background: #f8f8f8;
  width: 307px;
  padding: 14px 16px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 9px; */
`;
const Profile = styled.img`
  width: 40px;
  height: 40px;
`;
const Low = styled.div``;

const Middle = styled.div``;

const Username = styled.div`
  color: #494949;
  font-size: 13px;
  font-weight: 500;
`;
const CategoryBox = styled.div``;
const Category = styled.div`
  display: inline-block;
  padding: 2px 5px;
  border-radius: 10px;
  background: rgba(73, 73, 73, 0.2);
  color: #494949;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 3px;
`;

const Comment = styled.div`
  margin-top: 14px;
  width: 299px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
`;
