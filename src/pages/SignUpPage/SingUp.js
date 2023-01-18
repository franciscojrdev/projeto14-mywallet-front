import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import styled from "styled-components";
import { Form } from "../../components/Form/Form";

export default function SignUp() {
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form>
          <input id="name" type="text" placeholder="Nome" />
          <input id="email" type="email" placeholder="E-mail" />
          <input id="senha" type="password" placeholder="Senha" />
          <input id="rsenha" type="password" placeholder="Confirme a Senha" />
          <button type="submit">Cadastrar</button>
        </Form>
        <h2>
          Já tem uma conta? <br /> Entre agora!
        </h2>
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
