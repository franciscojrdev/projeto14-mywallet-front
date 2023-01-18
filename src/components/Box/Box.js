import styled from "styled-components";


export const Box = styled.div`
    width: 400px;
    height: 100%;
    position: relative;
    background-color: #8C11BE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    h1{
        font-size: 32px;
        font-family: "Saira Stencil One", cursive;
    }
    h2{
        font-size: 15px;
        font-weight: 700;
        text-align: center;
    }

    @media(max-width:600px){
        width: 100%;
        height: 100%;
    }
`