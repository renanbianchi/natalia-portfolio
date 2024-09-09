import styled from 'styled-components';
import { Container, Background, PageInfoHeaderContainer, PageInfoHeaderText } from '../Shared';
import { ResumeLink } from '../ResumeLink';
import { Skills } from '../Skills';

const HeaderContents = styled.div`
  @media (max-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

const PageInfoHeaderContainerStyled = styled(PageInfoHeaderContainer)`
  display: flex;
  gap: 10px;

  @media (max-width: 1280px) {
    margin-bottom: 0px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export function Resume() {
  const contents = [
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
      image: '/icons/unb.png',
      alt: 'imagem unb',
      title: 'Universidade de Brasília',
      subtitle: 'Arquitetura e Urbanismo',
      description: 'Matérias favoritas: Geometria analítica, intro a fotografia',
      width: '70px',
    },
    {
      image: '/icons/alura.png',
      alt: 'imagem alura',
      title: 'Alura',
      subtitle: 'Figma',
    },
    {
      image: '/icons/figma.png',
      alt: 'imagem figma',
      bgColor: '#2D2E37',
      width: '42px',
    },
    {
      image: '/icons/the-new-school.svg',
      alt: 'imagem parsons',
      title: 'Parsons The New School for Design',
      subtitle: 'Architectural Design',
      width: '81px',
    },
    {
      image: '/icons/uk.png',
      alt: 'imagem uk',
      title: 'Inglês',
      subtitle: 'Avançado',
      description: 'Nível C1',
      width: '71px',
    },
    {
      image: '/icons/iesb.svg',
      alt: 'imagem iesb',
      title: 'Instituto de Educação Superior de Brasília',
      subtitle: 'Design Gráfico',
      width: '65px',
    },
    {
      image: '/icons/illustrator.png',
      alt: 'imagem illustrator',
      bgColor: '#330000',
    },
    {
      title: 'Instituto Brasileiro de Geografia e estatística (IBGE)',
      subtitle: 'Agente Censitário Operacional',
      description: 'Apoio nas atividades da pesquisa censitária de 2022',
    },
    {
      title: 'Illinois Institute of Technology (IIT)',
      subtitle: 'Pesquisador acadêmico',
      description: 'Pesquisa sobre transporte público. APresentação ao Chicago Metropolitan Agency for Planning',
    },
    {
      image: '/icons/photoshop.png',
      alt: 'imagem photoshop',
      bgColor: '#001E36',
    },
    {
      title: 'AMP Propaganda',
      subtitle: 'Estágio em Design',
      description:
        'Desenvolvimento e derivação de diversas peças digitais e impressas, cartilhas, sites e identidades visuais.',
    },
    {
      image: '/icons/in-design.png',
      alt: 'imagem inDesign',
      bgColor: '#54001A',
    },
  ];

  return (
    <Background $text='midnightBlue' color='iceCream'>
      <Container id='resume'>
        <HeaderContents>
          <PageInfoHeaderContainerStyled>
            <PageInfoHeaderText>curriculo.</PageInfoHeaderText>
            <ResumeLink />
          </PageInfoHeaderContainerStyled>
        </HeaderContents>
        <Skills contents={contents} />
      </Container>
    </Background>
  );
}
