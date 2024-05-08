import styled from "styled-components";

const CardContainer = styled.div`
    background-color: #763F21;
    border-radius: 1rem;
    color: #F8E1CF;
    padding: 1.25rem;
    width: 15.6rem;
    height: 25rem;
    padding: 0.6rem;
`

const TituloCertificado = styled.h1`
    font-size: 1rem;
    font-family: pixelFontS;
    text-align: center;
    font-weight: 200;
    padding-bottom: 1.25rem;
`
const Informacao = styled.p`
    display: flex;
    font-weight: bold;  
    font-size: 1.1rem;
`

const Indice = styled.span`
    color: #D2A27A;
    padding: 0 0.6rem;
`

function CardCertificacao ({certificado}) {
    return(
        <CardContainer>
            <TituloCertificado> {certificado.nome.toUpperCase()}</TituloCertificado>
            <Informacao>
                <Indice> Instituição: </Indice> {certificado.instituicao} 
            </Informacao>
            <Informacao>
                <Indice> Duração: </Indice> {certificado.duracao} 
            </Informacao>
            <Informacao>
                <Indice> Certificado: </Indice> <a href={certificado.certificado} > Clique aqui </a>
            </Informacao>
        </CardContainer>
    )
}

export default CardCertificacao;