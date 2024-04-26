import styled from "styled-components";
import { Section } from "../Section";
import { Titulo } from "../Titulo";
import { Paragrafo } from "../Paragrafo";
import { Subtitulo } from "../Subtitulo";

const ExperienciasContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
`

const ExperienciaContainer = styled.div`
    padding: 20px;
    border: #763F21;
    border-style: dashed;
    margin: 20px 0;
`

function Experiencia(){
    return(
        <Section id="EXPERIÊNCIA">
            <Titulo>Experiência </Titulo>
            <ExperienciasContainer>
                <ExperienciaContainer>
                    <Subtitulo> TEC - TODAS ESSAS COISAS</Subtitulo>
                    <Paragrafo> 
                        Durante meu período na TEC, trabalhei em tempo integral como Desenvolvedor
                        de Software de maio de 2021 a setembro de 2022. Nesse papel, tive a oportunidade de aprimorar
                        minhas habilidades em Ruby on Rails, Cloudflare e integração com diversas APIs. A experiência me
                        permitiu desenvolver soluções robustas e escaláveis para os desafios enfrentados pela equipe de
                        desenvolvimento.
                    </Paragrafo>
                </ExperienciaContainer>
            </ExperienciasContainer>
        </Section>
    )
}

export default Experiencia