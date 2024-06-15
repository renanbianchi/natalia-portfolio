import styled from 'styled-components';
import {
  Background,
  Container, PageInfoHeaderContainer, PageInfoHeaderText, GreenBar
} from '../Shared';
import { ProjectItem } from '../ProjectItem';



const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 140px;
  gap: 140px;
  @media (max-width: 1280px) {
    padding: 0px;
    gap: 70px;
  }
`;

export function Projects() {
  const projects = [
    {
      img: '/images/recolheita.png',
      alt: 'imagem recolheita',
      title: 'recolheita',
      subtitle: 'incentivando práticas de consumo sustentável em moradores de centros urbanos',
      description: 'O app fictício Recolheita, é um projeto que busca fortalecer os laços entre produtores e consumidores, promovendo uma alimentação mais saudável, sustentável e comunitária.',
      tags: ['ux', 'ui', 'figma', 'miro', 'zoom', 'app'],
      to: '/projects/recolheita',
      disabled: false,
    },
    {
      img: '/images/adotaplus.png',
      alt: 'imagem adota+',
      title: 'adota +',
      subtitle: 'uma solução digital para ajudar na adoção de animais resgatados por ongs',
      description: 'A proposta deste projeto é criar uma solução digital fictícia para a ajudar a doação de animais resgatados por ONGs. O principal desafio foi criar uma <b>solução para este problema em apenas uma semana</b>, com o embasamento necessário, além de prototipar e testar a proposta',
      tags: ['ux', 'ui', 'figma', 'web'],
      to: '/projects/adota-mais',
      disabled: true,
    },
  ];
  return (
    <Background text="midnightBlue" color="iceCream">
      <Container id="projects">
        <PageInfoHeaderContainer>
          <GreenBar />
          <PageInfoHeaderText>
            projetos
          </PageInfoHeaderText>
        </PageInfoHeaderContainer>
        <ProjectsContainer>
          {projects.map((project) => <ProjectItem key={project.title} project={project} />)}
        <div id="about" />
        </ProjectsContainer>
      </Container>
    </Background>
  );
}
