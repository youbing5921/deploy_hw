import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import InputInfo from "./pages/InputInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/join/tos" element={<TermsOfServicePage />}></Route>
        <Route path="/join/info" element={<InputInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
