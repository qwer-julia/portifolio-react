import styled from "styled-components";
import { Section } from "../Section";
import { Titulo} from "../Titulo";
import ListaProjetos from "../ListaProjetos";

const ProjetosContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
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