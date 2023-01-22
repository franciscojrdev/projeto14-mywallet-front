import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function SingIn() {
  const { form, setForm } = useState({ email: "", password: "" });

  const navigate = useNavigate()

  function handleForm(e) {
    setForm({ ...form, [e.target.name]:e.target.value});
  }
  function signIn(e){
    e.preventDefault()

    const url = "http://localhost:5000/sign-in"

    axios.post(url,form).then((res)=>{
      console.log(res.data)
      navigate("/home")
    }).catch((err=>{
      console.log(err.response.data.message)
    }))
  }
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form onSubmit={signIn}>
          <input name="email" value={form.email} onChange={handleForm} type="email" placeholder="E-mail" required />
          <input name="password" value={form.password} onChange={handleForm} type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </Form>
        <StyledLink to="/cadastro">Primeira vez? Cadastre-se</StyledLink>
      </Box>
    </Container>
  );
}

export const StyledLink = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  text-decoration: none;
`;
