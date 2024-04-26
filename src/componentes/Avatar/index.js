import styled from "styled-components"
import avatar from "../../images/avatar.png"


const AvatarImage = styled.img`
    display: block;
    margin: auto;
    height:  ${props => props.tamanho || '23rem'};;
    position: relative;
    animation: 2.1s linear 0s infinite alternate-reverse none running avatar;

    @keyframes avatar {
        0% {
            top: 10px;
        }
        
        100% {
            top: -10px;
        }
    }
    
`

function Avatar() {
    return (
        <AvatarImage src={avatar} />
    )
}

export default Avatar