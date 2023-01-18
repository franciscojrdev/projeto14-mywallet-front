import { BoxPost } from "../../components/BoxPost/BoxPost";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";

export default function NewSpending() {
  return (
    <Container>
      <BoxPost>
        <h1>Nova saída</h1>
        <Form>
          <input id="rsenha" type="text" placeholder="Valor" />
          <input id="rsenha" type="text" placeholder="Descrição" />
          <button type="submit">Salvar saída</button>
        </Form>
      </BoxPost>
    </Container>
  );
}
