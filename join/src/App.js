import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import InputInfo from "./pages/InputInfo";
import Login from "./pages/Login";
import JoinComplete from "./pages/JoinComplete";

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
