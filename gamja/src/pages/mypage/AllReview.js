import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import axios from "axios";
import ReviewMore from "../../components/mypage/ReviewMore";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  const accessToken = localStorage.getItem("access");
  useEffect(() => {
    const getReviewMore = () => {
      axios
        .get("http://127.0.0.1:8000/review/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setReviews(response.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getReviewMore();
  }, [accessToken]);

  return (
    <>
      <Container>
        <TopBar txt={"마이페이지"} marginLeft={"154px"} />
        <ReviewBox>
          <ReviewMore reviews={reviews} />
        </ReviewBox>
      </Container>
    </>
  );
};

export default AllReview;
const Container = styled.div`
  width: 600px;
  height: 1230px;
  background: #ededed;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ReviewBox = styled.div`
  padding: 33px 40px 7px 40px;
`;
