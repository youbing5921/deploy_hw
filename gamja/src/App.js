import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomePage from "./pages/join/WelcomePage";
import TermsOfServicePage from "./pages/join/TermsOfServicePage";
import InputInfo from "./pages/join/InputInfo";
import ChooseCategory from "./pages/join/ChooseCategory";
import JoinComplete from "./pages/join/JoinComplete";
import Login from "./pages/login/Login";
import FindIdPw from "./pages/login/FindIdPw";
import Home from "./pages/common/Home";
import ConcernsPage from "./pages/mentor/ConcernsPage";
import FindMentor from "./pages/mentee/FindMentor";
import ChatListMentee from "./pages/chat/ChatListMentee";
import ChatListMentor from "./pages/chat/ChatListMentor";
import ChatRoomMentor from "./pages/chat/ChatRoomMentor";
import ChatRoomMentee from "./pages/chat/ChatRoomMentee";
import CreateChat from "./pages/chat/CreateChat";
import Category from "./pages/categoryAndMatching/Category";
import Matching from "./pages/categoryAndMatching/Matching";
import Community from "./pages/community/CommunityPage";
import Column from "./pages/community/ColumnPage";
import WriteColumnPage from "./pages/community/WriteColumnPage";
import MyPageMentor from "./pages/mypage/MyPageMentor";
import MypageMentee from "./pages/mypage/MypageMentee";
import MentorProfile from "./pages/profileBox/MentorProfile";
import MenteeProfile from "./pages/profileBox/MenteeProfile";
import FindResult from "./pages/login/FindResult";
import MentorSelectChat from "./pages/mypage/MentorSelectChat";
import MenteeSelectChat from "./pages/mypage/MenteeSelectChat";
import MentorJournalWrite from "./pages/mypage/MentorJournalWrite";
import MenteeJournalWrite from "./pages/mypage/MenteeJournalWrite";
import JournalDetail from "./pages/mypage/JournalDetail";
import WriteConcern from "./pages/mentee/WriteConcern";
import EditProfile from "./pages/mentor/EditProfile";
import EditMentee from "./pages/mentee/EditMentee";
import WriteReview from "./pages/mentee/WriteReview";
import AllConcerns from "./pages/mypage/AllConcerns";
import ReviewList from "./pages/profileBox/ReviewList";
import AllReview from "./pages/mypage/AllReview";
import TermDetail from "./pages/join/TermDetail";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* 회원가입 */}
        <Route path="/join" element={<WelcomePage />}></Route>
        <Route path="/join/tos" element={<TermsOfServicePage />}></Route>
        <Route path="/join/tos/detail/:id" element={<TermDetail />}></Route>
        <Route path="/join/info" element={<InputInfo />}></Route>
        <Route path="/join/category" element={<ChooseCategory />}></Route>
        <Route path="/join/complete" element={<JoinComplete />}></Route>
        {/* 로그인 */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/findId" element={<FindIdPw />}></Route>
        <Route path="/login/findPw" element={<FindIdPw />}></Route>
        <Route path="/login/findId/result" element={<FindResult />}></Route>
        <Route path="/login/findPw/result" element={<FindResult />}></Route>
        {/* 홈 */}
        <Route path="/home" element={<Home />}></Route>
        {/* 멘티돕기,멘토찾기 */}
        <Route path="/concerns" element={<ConcernsPage />}></Route>
        <Route path="/find" element={<FindMentor />}></Route>
        {/* 채팅하기 */}
        <Route path="/chat-list/mentor" element={<ChatListMentor />}></Route>
        <Route path="/chat-list/mentee" element={<ChatListMentee />}></Route>
        <Route path="/chat/mentor/:roomId" element={<ChatRoomMentor />}></Route>
        <Route path="/chat/mentee/:roomId" element={<ChatRoomMentee />}></Route>
        <Route
          path="/chat-create/mentee/:mentorId"
          element={<CreateChat />}
        ></Route>
        {/* 카테고리 및 매칭 */}
        <Route path="/category/mentor" element={<Category />}></Route>
        <Route path="/category/mentee" element={<Category />}></Route>
        <Route path="/matching" element={<Matching />}></Route>
        {/* 마이페이지 */}
        <Route path="/mypage/mentor/:name" element={<MyPageMentor />}></Route>
        <Route path="/mypage/mentee/:name" element={<MypageMentee />}></Route>
        <Route path="/mypage/mentor/edit" element={<EditProfile />}></Route>
        <Route path="/mypage/mentee/edit" element={<EditMentee />}></Route>
        {/* 일지 */}
        <Route
          path="/mypage/mentor/journal/select/"
          element={<MentorSelectChat />}
        ></Route>
        <Route
          path="/mypage/mentee/journal/select/"
          element={<MenteeSelectChat />}
        ></Route>
        <Route
          path="/mypage/mentor/journal/write/:roomId"
          element={<MentorJournalWrite />}
        ></Route>
        <Route
          path="/mypage/mentee/journal/write/:roomId"
          element={<MenteeJournalWrite />}
        ></Route>
        <Route
          path="/mypage/journal/detail/:id"
          element={<JournalDetail />}
        ></Route>
        {/* 고민 */}
        <Route path="/mypage/concerns-list/" element={<AllConcerns />}></Route>
        <Route path="/mypage/concern/write/" element={<WriteConcern />}></Route>
        {/* 상대방 프로필 조회 */}
        <Route
          path="/profile/mentor/:mentorId"
          element={<MentorProfile />}
        ></Route>
        <Route
          path="/profile/mentee/:menteeId"
          element={<MenteeProfile />}
        ></Route>
        {/* 커뮤니티 */}
        <Route path="/community" element={<Community />}></Route>
        <Route path="/community/:colId" element={<Column />}></Route>
        <Route path="/community/write" element={<WriteColumnPage />}></Route>
        <Route path="/community/modify" element={<WriteColumnPage />}></Route>
        <Route
          path="/community/mentor/:mentorId"
          element={<Community />}
        ></Route>
        {/* 리뷰작성 및 리뷰 더보기 목록 */}
        <Route path="/review/write/:roomId" element={<WriteReview />}></Route>

        <Route
          path="/profile/mentor/review-list/:mentorId"
          element={<ReviewList />}
        ></Route>
        <Route
          path="/mypage/mentor/review-list/:mentorId"
          element={<AllReview />}
        ></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #f8f8f8;
  width: 600px;
  margin: 0 auto;
`;
