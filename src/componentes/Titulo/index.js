import styled from "styled-components"

export const Titulo = styled.h2`
    font-family: 'pixelFontB',sans-serif;
    display: block;
    font-size: ${props => props.tamanho || '5rem'};
    color: ${props => props.cor || '#763F21'};
    text-align: ${props => props.alinhamento || 'center'};
    font-weight: normal;
    margin: 0.1rem auto;
    padding: 1.85rem 0;

    @media (max-width: 860px){
        text-align: center;
    }

    @media (max-width: 580px){
        font-size: ${props => props.tamanho || '3rem'};
    }
`