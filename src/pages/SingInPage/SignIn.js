import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState ,useContext} from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

export default function SignIn() {
  const  [form,setForm] = useState({ email: "", password: "" });
  const {setToken} = useContext(AuthContext)

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function login(e) {
    e.preventDefault();

    const url = "http://localhost:5000/sign-in";

    axios
      .post(url, form)
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token)
        navigate("/home");
      })
      .catch((err) => {
        alert(err.response.data.message)
        console.log(err.response.data);
      });
  }
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form onSubmit={login}>
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
