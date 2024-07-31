import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomePage from "./pages/join/WelcomePage";
import TermsOfServicePage from "./pages/join/TermsOfServicePage";
import InputInfo from "./pages/join/InputInfo";
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
import MyPageMentor from "./pages/mentor/MyPageMentor";
import MypageMentee from "./pages/mentee/MypageMentee";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/join" element={<WelcomePage />}></Route>
          <Route path="/join/tos" element={<TermsOfServicePage />}></Route>
          <Route path="/join/info" element={<InputInfo />}></Route>
          <Route path="/join/complete" element={<JoinComplete />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/findId" element={<FindIdPw />}></Route>
          <Route path="/login/findPw" element={<FindIdPw />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/concerns" element={<ConcernsPage />}></Route>
          <Route path="/find" element={<FindMentor />}></Route>
          <Route
            path="/chat-list/mentor/:username"
            element={<ChatListMentor />}
          ></Route>
          <Route
            path="/chat-list/mentee/:username"
            element={<ChatListMentee />}
          ></Route>
          <Route
            path="/chat/mentor/:roomId"
            element={<ChatRoomMentor />}
          ></Route>
          <Route
            path="/chat/mentee/:roomId"
            element={<ChatRoomMentee />}
          ></Route>
          <Route
            path="/chat-create/mentee/:roomId"
            element={<CreateChat />}
          ></Route>
          <Route path="/category/mentor" element={<Category />}></Route>
          <Route path="/category/mentee" element={<Category />}></Route>
          <Route path="/matching" element={<Matching />}></Route>
          <Route
            path="/mypage/mentor/:username"
            element={<MyPageMentor />}
          ></Route>
          <Route
            path="/mypage/mentee/:username"
            element={<MypageMentee />}
          ></Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #f8f8f8;
  width: 600px;
  margin: 0 auto;
`;
