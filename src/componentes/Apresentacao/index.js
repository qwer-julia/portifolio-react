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
    padding: 60px;
    margin: auto;
    font-size: 20px;
    margin: auto auto;
`

const Main = styled.main`
    height: 80vh;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
`

function Apresentacao(){
    return (
        <Main>
            <Section id="apresentacao">
                <ApresentacaoContainer>
                    <Subtitulo>
                        Oi, eu sou
                        <Titulo alinhamento="left"> Júlia Fonseca.</Titulo>
                        <Typewriter
                            options={{
                                strings: ['Desenvolvedora Web'],
                                autoStart: true,
                                loop: true,
                               

                            }}
                        />
                        <LinksExternos/>
                    </Subtitulo>
                    <Avatar/>
                </ApresentacaoContainer>
            </Section>
        </Main>
    )
}

export default Apresentacao