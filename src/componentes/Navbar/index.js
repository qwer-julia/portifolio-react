
import styled from "styled-components"
import OpcoesNavbar from "../OpcoesNavbar/index"
const NavbarContainer = styled.div`
    background-color: #763F21;
    display: flex;
    justify-content: center;
    color: #F8E1CF;
    font-family: 'pixelFontB',sans-serif;
`

function Navbar() {
    return (
        <header>
            <NavbarContainer>
                <OpcoesNavbar />
            </NavbarContainer>
        </header>
    )
}

export default Navbar