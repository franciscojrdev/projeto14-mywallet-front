import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { Homebox } from "../../components/Homebox/Homebox";
import plus from "../../assets/images/plus.svg";
import less from "../../assets/images/less.svg";
import icone from "../../assets/images/out.svg";
import { Link } from "react-router-dom";
import { StyledLink } from "../SingInPage/SignIn";

export default function Home() {
  return (
    <Container>
      <Homebox>
        <NavBar>
          <h2>Olá, Fulano</h2>
          <StyledLink to="/">
            <img src={icone}></img>
          </StyledLink>
        </NavBar>
        <Content></Content>
        <Footer>
          <StyledButton to="/nova-entrada">
            <img src={plus}></img>
            <span>
              Nova
              <br />
              entrada
            </span>
          </StyledButton>
          <div></div>
          <StyledButton to="/nova-saida">
            <img src={less}></img>
            <span>
              Nova
              <br />
              saída
            </span>
          </StyledButton>
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
  flex-shrink: initial;
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
  div{
    width: 20px;
  }
`;

const StyledButton = styled(Link)`
  height: 114px;
  width: 100%;
  border-radius: 5px;
  background-color: #a328d6;
  padding: 8px;
  color: #fff;
  font-weight: 700;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-between;
`;
