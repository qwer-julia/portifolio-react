
import styled from "styled-components"
import OpcoesNavbar from "../OpcoesNavbar/index"
const NavbarContainer = styled.div`
    background-color: #763F21;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    color: #F8E1CF;
    font-family: 'pixelFontB',sans-serif;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 2; 
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