import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
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
