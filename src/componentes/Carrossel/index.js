import styled from "styled-components";
import 'swiper/css'
import Slider from '../Slider/Slider.tsx';
import { SwiperSlide } from 'swiper/react';
import CardCertificacao from '../CardCertificacao'

const CarroselContainer = styled.div`
    padding: 1.85rem 0rem;
    overflow-x: auto;
    display: flex;

    @media (max-width: 680px){
        margin: 0 20%;
    }
`

function Carrossel() {
    return (
        <CarroselContainer>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"100px", height:"100px", margin: "auto 0"}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            <Slider>
                {
                    certificados.map((certificado) =>
                        <SwiperSlide>
                            <CardCertificacao certificado={certificado}></CardCertificacao>
                        </SwiperSlide>
                    )
                }
            </Slider>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"100px", height:"100px", margin: "auto 0"}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

        </CarroselContainer>

        
    )
}

export default Carrossel

const certificados = [
    {
        "id": "1",
        "nome": "ADS: Analise e Desennvolvimento de Sistemas",
        "instituicao": "UNIFEOB",
        "duracao": "Cursando",
        "certificado": ""
    },
    {
        "id": "2",
        "nome": "JavaScript: programação orientada a objetos",
        "instituicao": "Alura",
        "duracao": "10 horas",
        "certificado": "https://cursos.alura.com.br/certificate/a69dd088-f27e-4640-a7a2-31f0d6166780?lang=pt_BR"
    },
    {
        "id": "3",
        "nome": "React: comece seu projeto full stack",
        "instituicao": "Alura",
        "duracao": "12 horas",
        "certificado": "https://cursos.alura.com.br/certificate/f5d06c91-6705-4277-a11f-5b2f466be0c1?lang=pt_BR"
    },
    {
        "id": "4",
        "nome": "Node.js: continue seu projeto full stack criando uma API com Express",
        "instituicao": "Alura",
        "duracao": "8 horas",
        "certificado": "https://cursos.alura.com.br/certificate/04eaa457-c1f9-40de-a296-50c1ccd6a671?lang=pt_BR"
    },
    {
        "id": "5",
        "nome": "JavaScript para Web: Crie paginas dinamicas",
        "instituicao": "Alura",
        "duracao": "10 horas",
        "certificado": "https://cursos.alura.com.br/certificate/80f0ddb1-ca3d-4289-bfbc-e7e94fcece88?lang=pt_BR"
    },
    {
        "id": "5",
        "nome": "JavaScript: explorando a manipulação de elementos e da localStorage",
        "instituicao": "Alura",
        "duracao": "8 horas",
        "certificado": "https://cursos.alura.com.br/certificate/6820e7ad-6c5f-4fb5-9468-0ab17b8d18f7?lang=pt_BR"
    },
    {
        "id": "5",
        "nome": "JavaScript: manipulando elementos no DOM",
        "instituicao": "Alura",
        "duracao": "6 horas",
        "certificado": "https://cursos.alura.com.br/certificate/36deddf3-3ba3-4163-b193-c5bc09489aa1?lang=pt_BR"
    }
]