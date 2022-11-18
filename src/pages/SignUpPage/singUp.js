import { Container, Form, Main } from "../SignInPage/SingIn";

export default function SignUp() {
  return (
    <Container>
      <Main>
        <h1>My Wallet</h1>
        <Form>
          <input type="name" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme a senha" />
          <button>Cadastrar</button>
        </Form>
        <h2>Já tem uma conta? Entre agora!</h2>
      </Main>
    </Container>
  );
}
