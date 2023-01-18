import styled from "styled-components";

export const Homebox = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
  background-color: #8C11BE;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
