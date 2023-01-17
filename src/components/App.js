import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUpPage/SingUp";
import SingIn from "../pages/SingInPage/SignIn";
import GlobalStyle from "../styles/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SingIn/>} />
        <Route path="/cadastro" element={<SignUp/>} />

      </Routes>
    </BrowserRouter>
  );
}
