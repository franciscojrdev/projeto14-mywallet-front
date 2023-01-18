import { BoxPost } from "../../components/BoxPost/BoxPost";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";

export default function NewEntry() {
  return (
    <Container>
      <BoxPost>
        <h1>Nova entrada</h1>
        <Form>
          <input id="rsenha" type="text" placeholder="Valor" />
          <input id="rsenha" type="text" placeholder="Descrição" />
          <button type="submit">Salvar entrada</button>
        </Form>
      </BoxPost>
    </Container>
  );
}
