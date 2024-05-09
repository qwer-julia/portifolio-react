import styled from "styled-components";
import { Titulo } from "../Titulo";
import { Section } from "../Section";
import { Paragrafo } from "../Paragrafo";
import Carrossel from '../Carrossel'
import Lottie from 'lottie-react'
import animationData from '../../assets/pacman.json'

const CertificacoesContainer = styled.div`
    margin: 0 auto;
    max-width: 62.5rem;
    padding-top: 1.25rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 3rem;
`
const defaultOptions = {
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

function Certificacoes() {
    return (
        <Section id="CERTIFICAÇÕES" cor="#F8E1CF">
            <CertificacoesContainer>
                <Titulo>Certificações</Titulo>
                <Paragrafo>
                    Certificações são uma parte importante do meu percurso profissional, validando meu conhecimento e
                    comprometimento com a excelência no desenvolvimento profissional.
                </Paragrafo>
                <Paragrafo>
                    Aqui estão algumas das certificações que conquistei recentemente:
                </Paragrafo>
                <Carrossel />
                <Lottie
                    animationData={animationData}
                    options={defaultOptions}
                    height={400}
                    width={400}
                    style={{
                        overflow: "hidden",
                        height: "12.5rem",
                        marginTop: "-3.75rem"
                    }}
                />
            </CertificacoesContainer>
        </Section>
    )
}

export default Certificacoes