import { Container, Form } from "../SignInPage/SingIn";
import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function NewEntry() {
  const navigate = useNavigate()
  const { token } = useContext(UserContext);
  const [form, setForm] = useState({ token, saque:false , values:"",descripition:""});

  function handleForm(e) {
    setForm({...form, [e.target.name]:e.target.value})
  }

  function createEntry(e){
    e.preventDefault();
    const URI = "http://localhost:5000/new-entry"
    const body ={...form}
    axios.post(URI,body).then(res=>{
      console.log(res.data)
      navigate("/home")
    }).catch((err) => {
      console.log(err.response.data.message);
      alert("Erro encontrado")
    })
  }
  // console.log(form)
  return (
    <Container>
      <BoxContent>
        <h1>Nova entrada</h1>
        <Form onSubmit={createEntry}>
          <input
            type="number"
            name="values"
            value={form.values}
            onChange={handleForm}
            placeholder="Valor"
            pattern="(^\d+(\.|\,)\d{2}$)"
            required
          />
          <input
            type="text"
            name="descripition"
            value={form.descripition}
            onChange={handleForm}
            placeholder="Descrição"
            required
          />
          <button>Salvar entrada</button>
        </Form>
      </BoxContent>
    </Container>
  );
}

export const BoxContent = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    font-family: "Raleway";
    font-size: 26px;
    font-weight: 700;
    text-align: left;
    color: #fff;
    margin-bottom: 40px;
  }
`;
