import styled from "styled-components";
import { Section } from "../Section";
import { Titulo } from "../Titulo";

const ContatoContainer = styled.div`
    margin: 0 auto;
    max-width: 62.5rem;
    padding-top: 1.25rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 3rem;
`

const Email = styled.strong`
    font-family: 'pixelFontB';
    font-size: 30px;
`
function Contato(){
    return(
        <Section id="CONTATO">
            <ContatoContainer>
                <Titulo>Contato</Titulo>
                <Email>ENTRE O CONTATO ATRAVÉS DO E-MAIL FONJULIA89@GMAIL.COM</Email>
            </ContatoContainer>
        </Section>
    )
}

export default Contato