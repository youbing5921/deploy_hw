import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import ConcernsPage from "./pages/ConcernsPage";
import FindMentor from "./pages/FindMentor";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/concerns" element={<ConcernsPage />}></Route>
          <Route path="/find" element={<FindMentor />}></Route>
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
