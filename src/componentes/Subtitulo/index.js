import styled from "styled-components"

export const Subtitulo = styled.section`
    font-family: 'pixelFontS',sans-serif;
    width:  ${props => props.tamanho || '100%'};
    overflow-wrap: break-word;

    @media (max-width: 870px){
        width: 100%;
        text-align: center;
        padding: 0 0 4rem 0;
    }
`