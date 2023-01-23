import styled from "styled-components";

export default function ListData({ list }) {

  let soma = 0;
  list?.map((el) => {
    if (el.status === "entrada") {
      soma += Number(el.valor);
    }
    if (el.status === "saida") {
      soma -= Number(el.valor);
    }
  });
  let valorTotal = soma.toFixed(2);
  return (
    <FullList>
      <ul>
        {list?.map((el) => (
          <li>
            <Title>
              <h2>{el.day}</h2>
              <h3>{el.description}</h3>
            </Title>
            <Valor status={el.status === "entrada" ? "#03AC00" : "#C70000"}>
              {el.valor}
            </Valor>
          </li>
        ))}
      </ul>
      <section>
        <h1>SALDO</h1>
        <Total cor={valorTotal > 0 ? "#03AC00" : "#C70000"}>
          {valorTotal}
        </Total>
      </section>
    </FullList>
  );
}

const FullList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1 {
      font-weight: 700;
    }
  }
  ul {
    width: 100%;
    height: 95%;
  }
  li {
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

const Total = styled.h2`
  width: 20px;
  color: ${(props) => props.cor};
  margin-right: 25px;
`;

const Valor = styled.span`
  color: ${(props) => props.status};
`;
const Title = styled.div`
  display: flex;
  font-size: 16px;
  h2 {
    color: #c6c6c6;
    margin-right: 10px;
  }
  h3 {
    color: #000000;
  }
`;
