import styled from "styled-components"

const Opcoes = styled.ul`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
const Opcao = styled.li`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 30px;
    cursor: pointer;
    min-width: 120px;

    &:hover{
        color: #D2A27A;
    }
`

function OpcoesNavbar() {
    const textoOpcoes = ["SOBRE MIM", "EXPERIÊNCIA", "CERTIFICAÇÕES", "HABILIDADES TÉCNICAS", "CONTATO"]
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p><a href={`#${texto.replace(/\s/g, '')}`}>{texto}</a></p></Opcao>
            ))} 
        </Opcoes>
    )
}

export default OpcoesNavbar