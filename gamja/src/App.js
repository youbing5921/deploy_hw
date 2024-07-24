import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/common/Home";
import ConcernsPage from "./pages/mentor/ConcernsPage";
import FindMentor from "./pages/mentee/FindMentor";
import ChatOnBorad from "./pages/mentor/ChatOnBorad";
import ChatRoom from "./pages/mentor/ChatRoom";
import ChatInBox from "./pages/mentor/ChatInBox";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/concerns" element={<ConcernsPage />}></Route>
          <Route path="/find" element={<FindMentor />}></Route>
          <Route path="/chat/onboard" element={<ChatOnBorad />}></Route>
          <Route path="/chat/:roomId" element={<ChatRoom />}></Route>
          <Route path="/chat/inbox" element={<ChatInBox />}></Route>
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
