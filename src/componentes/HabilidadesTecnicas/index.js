import styled from "styled-components";
import { Titulo } from "../Titulo";
import Habilidades from "../../servicos/habilidadesTecnicas.json"
import { Section } from "../Section";
import Habilidade from "../Habilidade";

const HabilidadesContainer = styled.div`
    margin: 0 auto;
    max-width: 62.5rem;
    padding-top: 1.25rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 3rem;
`

function HabilidadesTecnicas() {
    return (
        <Section id="HABILIDADESTÉCNICAS" cor="#D2A27A">
            {console.log(Habilidades)}
            <HabilidadesContainer>
                <Titulo>Habilidades técnicas</Titulo>
                {Habilidades.map((habilidade) => (
                    <Habilidade habilidade={habilidade}/>
                )
            )}
            </HabilidadesContainer>
        </Section>
    )
}

export default HabilidadesTecnicas