import styled from "styled-components";
import { Section } from "../Section";
import { Titulo } from "../Titulo";
import { Subtitulo } from "../Subtitulo";

const ContatoContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
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