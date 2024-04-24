import './App.css';
import Navbar from './componentes/Navbar'
import styled from 'styled-components';
import Apresentacao from './componentes/Apresentacao'
const AppContainer = styled.div`

`
const Conteudo = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 50px;
`

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <Conteudo>
        <Apresentacao/>
      </Conteudo>
    </AppContainer>
  );
}

export default App;
