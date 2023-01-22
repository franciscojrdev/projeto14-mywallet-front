import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { Homebox } from "../../components/Homebox/Homebox";
import plus from "../../assets/images/plus.svg";
import less from "../../assets/images/less.svg";
import icone from "../../assets/images/out.svg";
import { Link } from "react-router-dom";
import { StyledLink } from "../SingInPage/SignIn";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

export default function Home() {
  const [dados, setDados] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const url = "http://localhost:5000/transacoes";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        console.log(res.data);
        setDados(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);
  console.log("token", token);
  console.log(dados);

  return (
    <Container>
      <Homebox>
        <NavBar>
          <h2>Olá, {dados?.user?.name}</h2>
          <StyledLink to="/">
            <img src={icone}></img>
          </StyledLink>
        </NavBar>
        <Content>
          {dados.length === 0?
          <EmptyList>
            Não há registros <br /> de entrada ou saída
          </EmptyList>:
          <FullList>

          </FullList>
        }
          
        </Content>
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
const EmptyList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868686;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FullList = styled.div`
  width: 100%;
`

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
  div {
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
