import styled from "styled-components";

export const TextoAnimadoEscrita = styled.p`

font-size: 15px;

&:after {
    content: "|";
    margin-left: 5px;
    opacity: 1;
    animation: 0.7s ease 0s infinite normal none running ponteiro;
}

@keyframes ponteiro {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

`