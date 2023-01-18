import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import NewEntry from "../pages/NewEntryPage/NewEntry";
import NewSpending from "../pages/NewSpendingPage/NewSpending";
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
        <Route path="/home" element={<Home/>} />
        <Route path="/nova-entrada" element={<NewEntry/>} />
        <Route path="/nova-saida" element={<NewSpending/>} />
      </Routes>
    </BrowserRouter>
  );
}
