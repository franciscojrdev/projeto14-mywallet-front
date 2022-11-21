import styled from "styled-components";
import { Container } from "../SignInPage/SingIn";
import BackImg from "../../assets/images/back.svg";
import PlusImg from "../../assets/images/plus.svg";
import LessImg from "../../assets/images/less.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomePage() {
  
  const location = useLocation()

  const token = location.state.token
  const [items,setItems] =useState([])

  useEffect(()=>{
    const URI = "http://localhost:5000/home"

    const config = {
     headers:{
      Authorization: `Bearer ${token}`
     } 
    }
    axios.get(URI,config).then((res)=>{
      setItems(res.data)
      console.log(res.data)
    }).catch((err) =>{
      console.log(err.response.data.message)
      alert("deu ruim")
    })

  },[])

  return (
    <Container>
      <BoxContent>
        <Header>
          <h1>Olá, {items.user?.name}</h1>
          <Link to="/">
            <img src={BackImg} />
          </Link>
        </Header>
        <Main>
          <p>Não há registros de entrada ou saída</p>
        </Main>
        <Footer>
          <LinkStyled to="/new-entry">
            <div>
              <img src={PlusImg} />
              <h3>
                Nova <br /> entrada
              </h3>
            </div>
          </LinkStyled>
          <span></span>
          <LinkStyled to="/new-out">
            <div>
              <img src={LessImg} />
              <h3>
                Nova <br /> saída
              </h3>
            </div>
          </LinkStyled>
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
  justify-content: space-between;
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
  height: 455px;
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

    font-family: "Raleway";
    font-size: 17px;
    font-weight: 700;
    color: #fff;
  }
  span {
    width: 20px;
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  height: auto;
`;
