import { Container, Form } from "../SignInPage/SingIn";
import styled from "styled-components";
export default function NewEntry() {
  return (
    <Container>
      <BoxContent>
        <h1>Nova entrada</h1>
        <Form>
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Descrição" />
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
    font-family: 'Raleway';
    font-size: 26px;
    font-weight: 700;
    text-align: left;
    color: #fff;
    margin-bottom: 40px;
  }
`;
