import './App.css';
import Navbar from './componentes/Navbar'
import styled from 'styled-components';
import Apresentacao from './componentes/Apresentacao'
import SobreMim from './componentes/SobreMim';
import Experiencia from './componentes/Experiencia'
import Certificacoes from './componentes/Certificacoes'
import ProjetosRecentes from './componentes/ProjetosRecentes'
import HabilidadesTecnicas from './componentes/HabilidadesTecnicas'
import Contato from './componentes/Contato';

const AppContainer = styled.div`
a{
  text-decoration: none;
}

a:link {
  color: #F8E1CF;
}	

a:visited {
  color: #F8E1CF;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: #763F21;
  border-radius: 0.6rem;
}
`

function App() {
  return (
    <AppContainer>
      <Navbar/>
        <Apresentacao/> 
        <SobreMim/>
        <Experiencia/>
        <Certificacoes/>
        <ProjetosRecentes/>
        <HabilidadesTecnicas/>
        <Contato/>
    </AppContainer>
  );
}

export default App;
