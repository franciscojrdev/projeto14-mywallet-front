import { BoxPost } from "../../components/BoxPost/BoxPost";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
// import CurrencyInput from "react-currency-input-field";

export default function NewEntry() {
  const [entrada, setEntrada] = useState({
    valor: 0,
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

    const url = "http://localhost:5000/transacoes";

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
          {/* <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="Valor"
            // defaultValue={}
            decimalsLimit={2}
            onValueChange={(value, name) => console.log(value, name)}
          /> */}
          <input
            name="valor"
            value={entrada.valor}
            onChange={handleForm}
            type="text"
            placeholder="Valor"
            required
          />
          <input
            name="description"
            value={entrada.description}
            onChange={handleForm}
            type="text"
            placeholder="Descrição"
            required
          />
          <button type="submit">Salvar entrada</button>
        </Form>
      </BoxPost>
    </Container>
  );
}
