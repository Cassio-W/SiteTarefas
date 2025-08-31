import { Routes, Route, HashRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import AccessPage from "./pages/AccessPage";

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<AccessPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App
