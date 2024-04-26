import styled from "styled-components";
import { Paragrafo } from "../Paragrafo";
import {Link} from "../Link"
const Card = styled.div`
    background-color: #F8E1CF;
    padding: 20px;
    margin: 10px auto;
    width: 30%;
    border-radius: 10px;
    font-family: Andale Mono, monospace;
    font-size: 20px;
    height: 280px;
    width: 260px;
    overflow-y: scroll;
`

const TituloProjeto = styled.strong`
    font-family: 'pixelFontB';
    font-size: 30px;
`


function ProjetoCard({nome, repositorio, status, descricao}){
    return(

    <Card>
        <TituloProjeto tamanho="40px">{nome.toUpperCase()}</TituloProjeto>
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