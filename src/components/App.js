import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import HomePage from "../pages/HomePage/HomePage";
import NewEntry from "../pages/NewEntryPage/NewEntry";
import NewOut from "../pages/NewOutPage/NewOut"
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
        <Route path="/new-entry" element={<NewEntry />} />
        <Route path="/new-out" element={<NewOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
