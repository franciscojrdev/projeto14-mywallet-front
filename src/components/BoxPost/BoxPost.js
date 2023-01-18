import styled from "styled-components";

export const BoxPost = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
  background-color: #8c11be;

  h1 {
    margin: 30px;
    color: #fff;
    font-size: 26px;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
