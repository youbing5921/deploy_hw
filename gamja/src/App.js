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
import ChatOnBorad from "./pages/mentor/ChatOnBorad";
import ChatRoom from "./pages/mentor/ChatRoom";
import ChatInBox from "./pages/mentor/ChatInBox";
import Category from "./pages/categoryAndMatching/Category";
import Matching from "./pages/categoryAndMatching/Matching";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
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
          <Route path="/chat/onboard" element={<ChatOnBorad />}></Route>
          <Route path="/chat/:roomId" element={<ChatRoom />}></Route>
          <Route path="/chat/inbox" element={<ChatInBox />}></Route>
          <Route path="/category/mentor" element={<Category />}></Route>
          <Route path="/category/mentee" element={<Category />}></Route>
          <Route path="/matching" element={<Matching />}></Route>
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
