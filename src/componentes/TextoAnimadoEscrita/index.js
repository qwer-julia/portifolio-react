import styled from "styled-components";

export const TextoAnimadoEscrita = styled.p`

font-size: 0.9rem;

&:after {
    content: "|";
    margin-left: 0.3rem;
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