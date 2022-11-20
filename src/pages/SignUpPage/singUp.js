import { Container, Form, Main } from "../SignInPage/SingIn";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function createAccount(e) {
    e.preventDefault();

    const URL = "http://localhost:5000/sign-up";
    const body = { ...form };
    console.log("teste", body);

    axios
      .post(URL, body)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert("erro no cadastro")
      });
  }
  return (
    <Container>
      <Main>
        <h1>My Wallet</h1>
        <Form onSubmit={createAccount}>
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            type="name"
            placeholder="Nome"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            placeholder="Senha"
            required
          />
          <input
            name="repeat_password"
            value={form.repeat_password}
            onChange={handleForm}
            type="password"
            placeholder="Confirme a senha"
            required
          />
          <button type="submit">Cadastrar</button>
        </Form>

        <h2>
          <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </h2>
      </Main>
    </Container>
  );
}

export const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-top: 36px;
`;
