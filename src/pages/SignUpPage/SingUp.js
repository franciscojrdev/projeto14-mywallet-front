import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import styled from "styled-components";
import { Form } from "../../components/Form/Form";
import { StyledLink } from "../SingInPage/SignIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function createAccount(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/sign-up`;

    axios.post(url, form).then((res) => {
      console.log(res.data);
      navigate("/");
    }).catch((err)=>{
      alert("Erro no cadastro")
      console.log(err.response.data.message)
    })
  }

  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form onSubmit={createAccount}>
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            type="text"
            placeholder="Nome"
            required
            data-test="name"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="E-mail"
            required
            data-test="email"
          />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            placeholder="Senha"
            required
            data-test="password"
          />
          <input
            name="repeat_password"
            value={form.repeat_password}
            onChange={handleForm}
            type="password"
            placeholder="Confirme a Senha"
            required
            data-test="conf-password"
          />
          <button type="submit" data-test="sign-up-submit">Cadastrar</button>
        </Form>
        <StyledLink to="/">
          Já tem uma conta? <br /> Entre agora!
        </StyledLink>
      </Box>
    </Container>
  );
}

export const Content = styled.div`
  width: 100%;
  height: 80%;
  background-color: #22263e;
  border-top-right-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  h1 {
    font-size: 40px;
    color: #fff;
    position: fixed;
    top: 25%;
    text-align: center;
  }
  h2 {
    margin-top: 20px;
    font-size: 12pt;
    text-align: center;
  }
  h3 {
    font-size: 12px;
    color: gray;
    position: fixed;
    top: 36%;
  }
`;
