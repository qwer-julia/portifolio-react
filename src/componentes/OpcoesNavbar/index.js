import styled from "styled-components"

const Opcoes = styled.ul`
    display: flex;
    list-style: none;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesNavbar() {
    const textoOpcoes = ["SOBRE MIM", "EXPERIÊNCIA", "CERTIFICAÇÕES", "HABILIDADES TÉCNICAS", "CONTATO"]
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))} 
        </Opcoes>
    )
}

export default OpcoesNavbar