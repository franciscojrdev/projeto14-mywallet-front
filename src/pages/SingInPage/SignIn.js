import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";

export default function SingIn() {
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form>
          <input id="email" type="email" placeholder="E-mail" />
          <input id="senha" type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>
        <h2>Primeira vez? Cadastre-se</h2>
      </Box>
    </Container>
  );
}