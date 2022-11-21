import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { StyledLink } from "../SignUpPage/singUp";

export default function SignIn() {
  const navigate = useNavigate()
  const {setToken} = useContext(UserContext)
  const [form, setForm] = useState({ email: "", password: "" });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function login(e){
    e.preventDefault();
    const URL = "http://localhost:5000/sign-in";
    const body = {...form};

    axios.post(URL,body).then((res)=>{
      console.log(res.data);
      setToken(res.data.token)
      navigate("/home", {state: res.data })
    }).catch((err) => {
      alert("deu ruim")
      console.log(err.response.data.message)})
  }
  return (
    <Container>
      <Main>
        <h1>My Wallet</h1>
        <Form onSubmit={login}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            placeholder="Senha"
            required
          />
          <button type="submit">Entrar</button>
        </Form>
        <h2>
          <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
        </h2>
      </Main>
    </Container>
  );
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  h1 {
    font-family: "Saira Stencil One";
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    margin: 24px auto;
    color: #fff;
  }
  h2 {
    font-family: "Raleway";
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin-top: 36px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;

  input {
    height: 58px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: none;
    margin-bottom: 15px;
    padding-left: 15px;

    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;

    ::placeholder {
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      text-align: left;
    }
  }
  button {
    height: 46px;
    width: 100%;
    border-radius: 5px;
    background-color: #a328d6;
    color: #fff;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 700;
    border: #a328d6;

    :hover {
      opacity: 0.9;
      box-shadow: 1px 1px 5px #a328d6;
    }
  }
`;
