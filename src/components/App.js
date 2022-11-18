import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import HomePage from "../pages/HomePage/HomePage";
import SignIn from "../pages/SignInPage/SingIn";
import SignUp from "../pages/SignUpPage/singUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
