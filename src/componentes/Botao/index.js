import styled from "styled-components";

export const Botao = styled.a`
    font-family: 'pixelFontB',sans-serif;
    font-size: 40px;
    text-decoration: none;
    background-color: #763F21;
    border-radius: 10px;
    width: fit-content;
    padding:15px;
    align-items: center;
    border-style: dashed;
    border-color:transparent;
    display: flex;

    &:hover {
        background-color: #D2A27A;
        border-style: dashed;
        border-color: #763F21;
        box-sizing:border-box; 
    }
`