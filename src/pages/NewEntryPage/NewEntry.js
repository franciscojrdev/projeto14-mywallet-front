import { BoxPost } from "../../components/BoxPost/BoxPost";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export default function NewEntry() {
  const [entrada, setEntrada] = useState({
    valor:0,
    description: "",
    status: "entrada",
  });
  const navigate = useNavigate();
  const {token} = useContext(AuthContext);

  function handleForm(e) {
    setEntrada({ ...entrada, [e.target.name]: e.target.value });
  }

  function inserirEntrada(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/transacoes`;


    axios.post(url, {
      token:token,
      description:entrada.description,
      valor:entrada.valor,
      status:entrada.status
    }).then((res)=>{
      console.log(res.data)
      navigate("/home")
    }).catch((err)=>{
      console.log(err.response.data.message)
    })
  }

  return (
    <Container>
      <BoxPost>
        <h1>Nova entrada</h1>
        <Form onSubmit={inserirEntrada}>
          <input
            name="valor"
            value={entrada.valor}
            onChange={handleForm}
            type="number"
            placeholder="Valor"
            required
            data-test="registry-amount-input"
          />
          <input
            name="description"
            value={entrada.description}
            onChange={handleForm}
            type="text"
            placeholder="Descrição"
            required
            data-test="registry-name-input"
          />
          <button type="submit" data-test="registry-save">Salvar entrada</button>
        </Form>
      </BoxPost>
    </Container>
  );
}
