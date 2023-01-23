import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BoxPost } from "../../components/BoxPost/BoxPost";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import AuthContext from "../../contexts/AuthContext";

export default function NewSpending() {
  const [saida, setSaida] = useState({
    valor: 0,
    description: "",
    status: "saida",
  });
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  function handleForm(e) {
    setSaida({ ...saida, [e.target.name]: e.target.value });
  }

  function inserirSaida(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/transacoes`;
    
    axios
      .post(url, {
        ...saida,
        token,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => console.log(err.response.data.message));
  }

  return (
    <Container>
      <BoxPost>
        <h1>Nova saída</h1>
        <Form onSubmit={inserirSaida}>
          <input
            name="valor"
            value={saida.valor}
            onChange={handleForm}
            type="number"
            placeholder="Valor"
            required
            data-test="registry-amount-input"
          />
          <input
            name="description"
            value={saida.description}
            onChange={handleForm}
            type="text"
            placeholder="Descrição"
            required
            data-test="registry-name-input"
          />
          <button type="submit" data-test="registry-save">Salvar saída</button>
        </Form>
      </BoxPost>
    </Container>
  );
}
