import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { Homebox } from "../../components/Homebox/Homebox";
import plus from "../../assets/images/plus.svg";
import less from "../../assets/images/less.svg";

import icone from "../../assets/images/out.svg";

export default function Home() {
  return (
    <Container>
      <Homebox>
        <NavBar>
          <h2>Olá, Fulano</h2>
          <img src={icone}></img>
        </NavBar>
        <Content></Content>
        <Footer>
          <Adicionar>
            <img src={plus}></img>
            <span>
              Nova
              <br />
              entrada
            </span>
          </Adicionar>
          <Remover>
            <img src={less}></img>
            <span>
              Nova
              <br />
              saída
            </span>
          </Remover>
        </Footer>
      </Homebox>
    </Container>
  );
}

const NavBar = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  img {
    width: 24px;
  }
`;

const Content = styled.main`
  width: 100%;
  height: 70%;
  margin: 10px 0 30px;
  border-radius: 5px;
  background-color: #fff;
`;

const Footer = styled.footer`
  width: 100%;
  height: 20%;
  display: flex;
  color: #fff;
  font-weight: 700;

  img {
    width: 24px;
  }
  span {
    font-size: 17px;
  }
`;

const Adicionar = styled.div`
  height: 114px;
  width: 100%;
  border-radius: 5px;
  background-color: #a328d6;
  margin-right: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Remover = styled.div`
  height: 114px;
  width: 100%;
  border-radius: 5px;
  background-color: #a328d6;
  margin-left: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
