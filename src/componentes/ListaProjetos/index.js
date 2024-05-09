import styled from "styled-components";
import projetos from '../../servicos/projetos.json';
import ProjetoCard from "../ProjetoCard";

const ListaContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 2rem;
`

function ListaProjetos() {
  return(
  <ListaContainer id="lista-projetos">
    {
      projetos.projects.map(e => (
        <ProjetoCard
            nome={e.projectName}
            repositorio={e.projectRepo}
            status={e.status}
            descricao={e.projectDescription}
        />
      ))
    }
  </ListaContainer>
  )
}

export default ListaProjetos

