import styled from "styled-components";
import { Paragrafo } from "../Paragrafo";
import { Subtitulo } from "../Subtitulo";
import LogoNode from "../../images/nodeIcon.svg"
import LogoRails from "../../images/railsIcon.svg"
import LogoReact from "../../images/reactIcon.svg"
import LogoHtml from "../../images/htmlIcon.svg"

const HabilidadeContainer = styled.div`

`

const HabilidadeDescricao = styled.div`
    display: flex;

`

const LogoImg = styled.img`
    max-width: 16rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 15%;
    -webkit-box-align: center;
    align-items: center;
    padding: 1.25rem;

`

function Habilidade({ habilidade }) {
    return (
        <HabilidadeContainer>
            <Subtitulo> {habilidade.nome.toUpperCase()}</Subtitulo>
            <HabilidadeDescricao>
                <Paragrafo> {habilidade.descricao} </Paragrafo>
                <LogoImg src={Logo(habilidade.icone)} ></LogoImg>
            </HabilidadeDescricao >
        </HabilidadeContainer >
    )
}

function Logo(icone){
    switch (icone) {
        case "node":
          return LogoNode
        case "react":
          return LogoReact
        case "rails":
          return LogoRails
        case "html":
          return LogoHtml
        default:
            return ""
      }
}

export default Habilidade