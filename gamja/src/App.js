import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/join/WelcomePage";
import TermsOfServicePage from "./pages/join/TermsOfServicePage";
import InputInfo from "./pages/join/InputInfo";
import Login from "./pages/join/Login";
import JoinComplete from "./pages/join/JoinComplete";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/join" element={<WelcomePage />}></Route>
        <Route path="/join/tos" element={<TermsOfServicePage />}></Route>
        <Route path="/join/info" element={<InputInfo />}></Route>
        <Route path="/join/complete" element={<JoinComplete />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
