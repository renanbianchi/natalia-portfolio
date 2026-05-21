import styled from 'styled-components';
import { ResumeLink } from '../ResumeLink';
import { Background, Container, PageInfoHeaderContainer, PageInfoHeaderText } from '../Shared';
import { Skills } from '../Skills';

const HeaderContents = styled.div`
  @media (max-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

const PageInfoHeaderContainerStyled = styled(PageInfoHeaderContainer)`
  display: flex;
  gap: 8px;

  @media (max-width: 1280px) {
    margin-bottom: 0px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SkillsAndResume = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export function Resume() {
  const contents = [
    {
      title: 'Personal Fit',
      subtitle: 'UX/UI Designer voluntário',
      description: 'Pesquisa, análise, criação de protótipos, handoff e style guide para app da área Fitness',
      width: '280px',
    },
    {
      title: 'Tech Pro Bem',
      subtitle: 'UX/UI Designer',
      description: 'Pesquisa, análise, criação de protótipos, handoff e style guide para site de ONG de saúde mental.',
      width: '300px',
    },
    {
      image: '/icons/design-circuit.png',
      alt: 'imagem design-circuit',
      title: 'Design Circuit',
      subtitle: 'UX UI Design',
    },
    {
      image: '/icons/tera.png',
      alt: 'imagem tera',
      title: 'Tera',
      subtitle: 'UX Design',
    },
    {
      image: '/icons/more.png',
      alt: 'imagem more',
      title: 'IA no Processo de Design',
      subtitle: 'Môre Educação',
    },
    {
      image: '/icons/unb.png',
      alt: 'imagem unb',
      title: 'Universidade de Brasília',
      subtitle: 'Arquitetura e Urbanismo',
      imageWidth: '70px',
    },
    {
      title: 'Illinois Institute of Technology (IIT)',
      subtitle: 'Pesquisador acadêmico',
      description: 'Pesquisa sobre transporte público. APresentação ao Chicago Metropolitan Agency for Planning',
      width: '300px',
    },
    {
      image: '/icons/alura.png',
      alt: 'imagem alura',
      title: 'Alura',
      subtitle: 'Figma',
    },
    {
      image: '/icons/the-new-school.svg',
      alt: 'imagem parsons',
      title: 'Parsons The New School for Design',
      subtitle: 'Architectural Design',
      imageWidth: '81px',
    },
    {
      image: '/icons/iesb.svg',
      alt: 'imagem iesb',
      title: 'Instituto de Educação Superior de Brasília',
      subtitle: 'Design Gráfico',
      imageWidth: '65px',
    },
    {
      title: 'Instituto Brasileiro de Geografia e estatística (IBGE)',
      subtitle: 'Agente Censitário Operacional',
      description: 'Apoio nas atividades da pesquisa censitária de 2022',
      width: '280px',
    },
    {
      title: 'AMP Propaganda',
      subtitle: 'Estágio em Design',
      description:
        'Desenvolvimento e derivação de diversas peças digitais e impressas, cartilhas, sites e identidades visuais.',
      width: '280px',
    },
    {
      image: '/icons/uk.png',
      alt: 'imagem uk',
      title: 'Inglês',
      subtitle: 'Avançado',
      description: 'Nível C1',
      imageWidth: '71px',
    },
  ];

  return (
    <Background $text='midnightBlue' color='iceCream'>
      <Container id='resume'>
        <HeaderContents>
          <PageInfoHeaderContainerStyled>
            <PageInfoHeaderText>curriculo</PageInfoHeaderText>
          </PageInfoHeaderContainerStyled>
        </HeaderContents>
        <SkillsAndResume>
          <Skills contents={contents} />
          <ResumeLink />
        </SkillsAndResume>
      </Container>
    </Background>
  );
}
