import styled from "styled-components";
import { Titulo } from "../Titulo";
import Habilidades from "../../servicos/habilidadesTecnicas.json"
import { Section } from "../Section";
import Habilidade from "../Habilidade";

const HabilidadesContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
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