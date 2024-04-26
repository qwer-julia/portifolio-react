import styled from "styled-components"

export const Titulo = styled.h2`
    font-family: 'pixelFontB',sans-serif;
    display: block;
    font-size: ${props => props.tamanho || '80px'};
    color: ${props => props.cor || '#763F21'};
    text-align: ${props => props.alinhamento || 'center'};
    font-weight: normal;
    margin: 2px auto;
    padding: 30px 0;
`