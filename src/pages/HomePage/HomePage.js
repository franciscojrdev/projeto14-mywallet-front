import styled from "styled-components";
import { Container } from "../SignInPage/SingIn";
import BackImg from "../../assets/images/back.svg";
export default function HomePage() {
  return (
    <Container>
      <BoxContent>
        <Header>
          <h1>Olá, fulano</h1>
          <img src={BackImg} />
        </Header>
        <Main>
          <p>Não há registros de entrada ou saída</p>
        </Main>
        <Footer>
          <div>1</div>
          <span></span>
          <div>2</div>
        </Footer>
      </BoxContent>
    </Container>
  );
}

const BoxContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  h1 {
    font-family: "Raleway";
    font-size: 26px;
    font-weight: 700;
    color: #fff;
  }
`;

const Main = styled.main`
  background-color: #fff;
  width: 100%;
  height: 446px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    text-align: center;
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 40px;

  div {
    height: 114px;
    width: 100%;
    border-radius: 5px;
    background-color: #a328d6;
  }
  span{
    width: 20px;
  }
`;
