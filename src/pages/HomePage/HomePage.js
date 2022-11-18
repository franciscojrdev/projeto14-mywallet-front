import styled from "styled-components";
import { Container } from "../SignInPage/SingIn";
import BackImg from "../../assets/images/back.svg";
import PlusImg from "../../assets/images/plus.svg";
import LessImg from "../../assets/images/less.svg";

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
          <div>
            <img src={PlusImg} />
            <h3>
              Nova <br /> entrada
            </h3>
          </div>
          <span></span>
          <div>
            <img src={LessImg} />
            <h3>
              Nova <br /> saída
            </h3>
          </div>
        </Footer>
      </BoxContent>
    </Container>
  );
}

const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  height: 440px;
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
  margin-top: 20px;

  div {
    padding: 5px;
    height: 114px;
    width: 100%;
    border-radius: 5px;
    background-color: #a328d6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    font-family: 'Raleway';
    font-size: 17px;
    font-weight: 700;
    color: #fff;
  }
  span {
    width: 20px;
  }
`;
