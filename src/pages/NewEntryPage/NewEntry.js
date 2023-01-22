import { BoxPost } from "../../components/BoxPost/BoxPost";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import CurrencyInput from "react-currency-input-field";

export default function NewEntry() {
  return (
    <Container>
      <BoxPost>
        <h1>Nova entrada</h1>
        <Form>
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="Valor"
            // defaultValue={}
            decimalsLimit={2}
            onValueChange={(value, name) => console.log(value, name)}
          />
          ;
          <input id="rsenha" type="text" placeholder="Valor" />
          <input id="rsenha" type="text" placeholder="Descrição" />
          <button type="submit">Salvar entrada</button>
        </Form>
      </BoxPost>
    </Container>
  );
}
