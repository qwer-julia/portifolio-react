import styled from "styled-components";
import { Section } from "../Section";
import { Titulo} from "../Titulo";
import ListaProjetos from "../ListaProjetos";

const ProjetosContainer = styled.div`
    margin: 0 auto;
    max-width: 62.5rem;
    padding-top: 1.25rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 3rem;
`

function ProjetosRecentes(){
    return(
        <Section id="PROJETOS" >
            <ProjetosContainer>
                <Titulo> Projetos recentes</Titulo>
                    <ListaProjetos/>
                        
            </ProjetosContainer>        
        </Section>
    )
}

export default ProjetosRecentes