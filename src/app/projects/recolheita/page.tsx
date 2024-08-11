'use client';

import styled from 'styled-components';
import { Container, Background } from '@/components/Shared';
import { ProjectHeader } from '@/components/ProjectHeader';

const ProjectContainer = styled(Container)`
  overflow: visible;
`;

const Topic = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.midnightBlue};
  z-index: 21 !important;
`;

const Description = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  max-width: 879px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.slateGray};
  z-index: 21 !important;
  margin-bottom: 88px;
`;

const TopicContainer = styled.div<{ outwards?: boolean; mt?: number; mb?: number; horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  gap: 12px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : '78px')};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : '27px')};

  ${({ horizontal }) =>
    horizontal &&
    `
    align-items: center;
    gap: 30px;

    & span {
      width: 577px;
    }

    @media (max-width: 1280px) {
      flex-direction: column;

      & span {
        width: 100%;
      }
    }  
  `}

  ${({ outwards }) =>
    outwards &&
    `
    position: relative;
    margin-top: -27px; 
    z-index: 2;
    margin-bottom: -78px;
  `}

  img {
    margin: auto;
  }

  @media (max-width: 1280px) {
    > img {
      width: 100%;
    }

    margin-top: ${({ mt }) => (mt ? `${mt * 2}px` : '')};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function Recolheita() {
  const data = {
    projectHeader: {
      header: 'recolheita',
      title: 'incentivando práticas de consumo sustentável em moradores de centros urbanos',
      subtitle:
        '*O projeto foi desenvolvido em grupo durante o bootcamp de UX design da Tera, obtido através de uma seleção de 50 bolsas de estudo oferecidas pelo Santander Universidades.',
      img: '/images/projects/recolheita/app-image-1.webp',
      imgAlt: 'imagem projeto recolheita no celular',
    },
    contents: {
      research: {
        title: 'Research',
        description:
          'Através da Matriz CSD, onde selecionamos as Certezas, Suposições e principalmente as Dúvidas do grupo, conseguimos uma base do que deveria ser explorado na desk research. Durante a pesquisa, buscamos principalmente <b><i>entender o que é consumo sustentável</i></b>, já que esta expressão pode ser utilizada em diversas áreas. Podemos pensar em consumo sustentável quanto a roupas, energia, alimentação, embalagens. Esta etapa foi fundamental para entender melhor as possibilidades de resposta a um problema tão amplo e também para formular as perguntas da próxima etapa.',
      },
      interviews: {
        title: 'Entrevistas',
        description:
          'Realizamos entrevistas com pessoas de diferentes centros urbanos do Brasil. Os entrevistados variavam de acordo com renda, faixa etária e profissão. Foram feitas perguntas sobre os hábitos relacionados a descarte de lixo, roupas, compras, porém, eles apresentaram preocupações em comum durante a entrevista: <b><i>associavam o consumo sustentável a alimentação e saúde</i></b>, demonstrando interesse em mudar os hábitos caso fossem relacionados a estes dois fatores. Além disso, muitos afirmaram ter repensado seus hábitos após a pandemia de covid, estando mais preocupados com o futuro. Este resultado foi compatível com os dados encontrados na desk research, dando maior segurança quanto ao direcionamento do projeto.',
      },
      persona: {
        title: 'Persona',
        description:
          'Para guiar os próximos passos do processo, criamos a figura de Marcelo. Ele personifica as pessoas entrevistadas e a desk research, <b><i>representando os seus desejos e suas dores</i></b>, além disso, a sua figura nos ajudou a manter o foco em quem é nosso usuário e quais as necessidades a serem supridas. ',
      },
      redefining: {
        title: 'Redefinição do problema',
        description:
          'A redefinição do problema após a pesquisa e persona é importante para responder a ampla questão inicial, incentivar o consumo sustentável em moradores de centros urbanos. Nesta etapa, pensamos nas necessidades de Marcelo e utilizamos o <b><i>How Might We (ou Como nós podemos)</i></b>, este exercício funciona formulando perguntas abertas e exploratórias para inspirar a geração de ideias e soluções criativas. Através disso, <b><i>redefinimos problemas complexos em questões mais específicas</i></b>, impulsionando a resolução de problemas.',
      },
      solution: {
        title: 'A solução',
        description:
          'Para encontrar uma solução que respondesse as necessidades de Marcelo, decidimos por algo que pudesse facilitar o acesso a produtos “verdes”, que fosse compatível com a vida urbana e com alguns comportamentos que os usuários tinham (delivery e uso de app), ao mesmo tempo permitindo a mudança de hábito desejada, sem perder a praticidade. Após a realização de um <b><i>Crazy 8</i></b> (onde cada participante daria 8 idéias em 8 minutos) e <b><i>brainstorms</i></b>, chegamos a um aplicativo que permite a encomenda de alimentos produzidos localmente, fornece dicas para uma vida mais sustentável, ajudo usuário a encontrar a cesta certa para o seu consumo, com relação a quantidade, tipos de dietas e afins. ',
      },
      learnings: {
        title: 'aprendizados',
        description:
          'O projeto Recolheita foi uma ótima oportunidade de aprender que problemas amplos e complexos podem ser simplificados e melhor compreendidos através de pesquisa, entrevistas, priorização e com a ajuda de métodos de UX design. O trabalho em grupo também contribuiu para o aprendizado, pois cada integrante é capaz de apresentar diferentes insights, trazer dúvidas e sugestões que agregam valor ao resultado final e trocar conhecimentos de acordo com o background e habilidades de cada um. O resultado final é um aplicativo complexo, assim como o problema a ser resolvido inicialmente. ',
      },
    },
  };
  const { research, interviews, persona, redefining, solution, learnings } = data.contents;

  return (
    <Background color='iceCream' $text='midnightBlue'>
      <ProjectContainer>
        <ProjectHeader
          title={data.projectHeader.title}
          header={data.projectHeader.header}
          subtitle={data.projectHeader.subtitle}
          $img={data.projectHeader.img}
        />
        <TopicContainer>
          <Topic>{research.title}</Topic>
          <Description dangerouslySetInnerHTML={{ __html: research.description }} />
          <img width={1144} src='/images/projects/recolheita/graph-1.webp' alt='Imagem gráfico 01' />
          <img width={1177} src='/images/projects/recolheita/graph-2.webp' alt='Imagem gráfico 02' />
        </TopicContainer>
      </ProjectContainer>
      <Background color='creamyPeach'>
        <ProjectContainer>
          <TopicContainer outwards>
            <Topic>{interviews.title}</Topic>
            <Description dangerouslySetInnerHTML={{ __html: interviews.description }} />
            <img width={1177} src='/images/projects/recolheita/graph-3.webp' alt='Imagem gráfico 03' />
          </TopicContainer>
        </ProjectContainer>
      </Background>
      <ProjectContainer>
        <TopicContainer mt={48}>
          <Topic>{persona.title}</Topic>
          <Description dangerouslySetInnerHTML={{ __html: persona.description }} />
          <img width={1364} src='/images/projects/recolheita/marcelo.webp' alt='Imagem dados Marcelo' />
        </TopicContainer>
        <TopicContainer horizontal>
          <ContentContainer style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Topic>{redefining.title}</Topic>
            <Description dangerouslySetInnerHTML={{ __html: redefining.description }} />
          </ContentContainer>
          <img width={591} src='/images/projects/recolheita/redefining.webp' alt='Imagem redefinição do problema' />
        </TopicContainer>
        <TopicContainer mt={48}>
          <Topic>{solution.title}</Topic>
          <Description dangerouslySetInnerHTML={{ __html: solution.description }} />
          <img width={1425} src='/images/projects/recolheita/recolheita-1.webp' alt='Imagem recolheita 1' />
          <img width={1179} src='/images/projects/recolheita/recolheita-2.webp' alt='Imagem recolheita 2' />
          <img width={1179} src='/images/projects/recolheita/recolheita-3.webp' alt='Imagem recolheita 3' />
          <img width={1206} src='/images/projects/recolheita/recolheita-4.webp' alt='Imagem recolheita 4' />
        </TopicContainer>
        <TopicContainer>
          <Topic>{learnings.title}</Topic>
          <Description dangerouslySetInnerHTML={{ __html: learnings.description }} />
        </TopicContainer>
      </ProjectContainer>
    </Background>
  );
}
