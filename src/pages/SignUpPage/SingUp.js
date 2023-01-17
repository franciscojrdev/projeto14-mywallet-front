import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import wallet from "../../assets/images/icone.png";
import styled from "styled-components";
import { Form } from "../../components/Form/Form";

export default function SignUp() {
  return (
    <Container>
      <Box>
        <Title>
          <img src={wallet} />
          <h1>My Wallet</h1>
        </Title>
        <Content>
          <h1>
            Create <br />
            new Account
          </h1>
          <Form>
            <span>NOME</span>
            <input type="text" />
            <span>EMAIL</span>
            <input type="email" />
            <span>SENHA</span>
            <input type="password" />
            <span>CONFIRME A SENHA</span>
            <input type="password" />
            <button type="submit">Sign up</button>
          </Form>
          <h2>Already Have Account? <br/> Login!</h2>
        </Content>
      </Box>
    </Container>
  );
}

const Title = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pacifico";
  color: black;

  img {
    width: 60px;
  }
  h1 {
    font-size: 20pt;
  }
`;

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
