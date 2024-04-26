import styled from "styled-components";
import { Section } from "../Section";
import { Titulo } from "../Titulo";
import { Paragrafo } from "../Paragrafo";

const SobreMimContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
`


function SobreMim(){
    return(
        <Section cor="#D2A27A" id="SOBREMIM">
        <SobreMimContainer>
                <Titulo> Sobre mim</Titulo>
                <Paragrafo>
                    Meu nome é Júlia Fonseca, sou apaixonada por tecnologia. Com formação técnica em informática pelo
                    IFSP e experiência de trabalho em programação, estou voltando ao mercado de trabalho comprometida em
                    aprender e participar novos projetos.
                </Paragrafo>
                <Paragrafo>
                    Atualmente estou cursando análise e desenvolvimento de sistemas (ADS) e focando no desenvolvimento
                    FullStack. Utilizando principalmente JavaScript.
                </Paragrafo>
        </SobreMimContainer>
        </Section>
    )
}

export default SobreMim