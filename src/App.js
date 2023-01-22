import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/HomePage/Home";
import NewEntry from "./pages/NewEntryPage/NewEntry";
import NewSpending from "./pages/NewSpendingPage/NewSpending";
import SignUp from "./pages/SignUpPage/SingUp";
import SignIn from "./pages/SingInPage/SignIn";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{token,setToken}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewEntry />} />
          <Route path="/nova-saida" element={<NewSpending />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
