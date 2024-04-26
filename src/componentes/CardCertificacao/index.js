import styled from "styled-components";

const CardContainer = styled.div`
    background-color: #763F21;
    border-radius: 15px;
    color: #F8E1CF;
    padding: 20px;
    width: 250px;
    height: 400px;
    padding: 10px;
`

const TituloCertificado = styled.h1`
    font-size: 15px;
    font-family: pixelFontS;
    text-align: center;
    font-weight: 200;
    padding-bottom: 20px;
`
const Informacao = styled.p`
    display: flex;
    font-weight: bold;  
    font-size: 17px;
`

const Indice = styled.span`
    color: #D2A27A;
    padding: 0 10px;
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