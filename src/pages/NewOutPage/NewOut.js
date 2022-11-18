import { BoxContent } from "../NewEntryPage/NewEntry";
import { Container, Form } from "../SignInPage/SingIn";

export default function NewOut() {
  return (
    <Container>
      <BoxContent>
        <h1>Nova Saída</h1>
        <Form>
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Descrição" />
          <button>Salvar saída</button>
        </Form>
      </BoxContent>
    </Container>
  );
}
