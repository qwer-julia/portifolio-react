import styled from "styled-components"
import {Titulo} from "../Titulo"
import {Subtitulo} from "../Subtitulo"
import Avatar from "../Avatar"
import LinksExternos from "../LinksExternos"
import {Section } from "../Section"
import Typewriter from 'typewriter-effect';

const ApresentacaoContainer = styled.div`
    display: flex;
    align-self: auto;
    padding: 3.75rem;
    font-size: 1.25rem;
    margin: auto auto;
    justify-content: space-between;
    
    @media (max-width: 870px){
        flex-direction: column;
        padding: 1rem;
    }
`

const Main = styled.main`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 62.5rem;
    padding-top: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 3rem;

    @media (max-width: 870px){
        padding-top: 0;
    }
`

function Apresentacao(){
    return (
        <Main>
            <Section id="apresentacao">
                <ApresentacaoContainer>
                    <Subtitulo tamanho='50%'>
                        Oi, eu sou
                        <Titulo alinhamento="left"> Júlia Fonseca.</Titulo>
                        <Typewriter
                            options={{
                                strings: ['Desenvolvedora Web'],
                                autoStart: true,
                                loop: true,
                               

                            }}
                        />
                    </Subtitulo>
                    <Avatar/>
                </ApresentacaoContainer>
                <LinksExternos/>
            </Section>
        </Main>
    )
}

export default Apresentacao