import styled from "styled-components";
import { Paragrafo } from "../Paragrafo";
import {Link} from "../Link"

const Card = styled.div`
    background-color: #F8E1CF;
    padding: 1.25rem;
    margin: 0.6rem auto;
    width: 30%;
    border-radius: 0.6rem;
    font-family: Andale Mono, monospace;
    font-size: 1.25rem;
    height: 17.5rem;
    width: 23.75rem;
    overflow-y: scroll;

    @media (max-width: 580px){
        text-align: center;
    }
`

const TituloProjeto = styled.strong`
    font-family: 'pixelFontB';
    font-size: 1.85rem;
`


function ProjetoCard({nome, repositorio, status, descricao}){
    return(

    <Card>
        <TituloProjeto tamanho="2.5rem">{nome.toUpperCase()}</TituloProjeto>
        <Paragrafo>
            {descricao}
        </Paragrafo>
        <Paragrafo>
            Status: {status}
        </Paragrafo>
        <Link href={repositorio}>Clique aqui para acessar</Link>
    </Card>
    )
}

export default ProjetoCard