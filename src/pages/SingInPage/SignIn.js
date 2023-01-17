import styled from "styled-components";
import { Box } from "../../components/Box/Box";
import { Container } from "../../components/Container/Container";
import wallet from "../../assets/images/icone.png";
import { Form } from "../../components/Form/Form";

export default function SingIn() {
  return (
    <Container>
      <Box>
        <Title>
            <img src={wallet}/>
            <h1>My Wallet</h1>
        </Title>
        <Content>
            <h1>Login</h1>
            <h3>Sign in to continue</h3>
            <Form>
                <span>EMAIL</span>
                <input type="email"/>
                <span>SENHA</span>
                <input type="password"/>
                <button type="submit">Log in</button>
            </Form>
            <h2>First Time? Sing Up!</h2>
        </Content>
      </Box>
    </Container>
  );
}

const Title = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pacifico';
  color: black;

  img{
    width: 60px;
  }
  h1{
    font-size: 20pt;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 70%;
  background-color: #22263E;
  border-top-right-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;


  h1{
    font-size: 40px;
    color: #fff;
    position: fixed;
    top: 40%;
  }
  h2{
    margin-top: 20px;
    font-size: 10pt;
  }
  h3{
    font-size: 12px;
    color: gray;
    position: fixed;
    top: 47%;
  }
`;
