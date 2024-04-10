import styled from 'styled-components';
import { Container } from '../Shared';

const Hero = styled.h1`
  font-family: ${({ theme }) => theme.fonts.boldfont};
  font-size: 200px;
  color: ${({ theme }) => theme.colors.iceCream};
  width: 1215px;
`;

const OpenDialogsContainer = styled.div`
  margin-top: 133px;
  display: flex;
  gap: 120px;
  position: relative;
  margin-bottom: 150px;
`;

const Dialog = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.iceCream};
  width: 482px;
`;

const HeaderContainer = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  width: 52px;
  margin-bottom: 72px;
`;

const GreenBar = styled.div`
  border-radius: 3px;
  height: 3px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.limeGreen};
`;

const PageInfo = styled.span`
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.iceCream};
`;

const Smile = styled.img`
  position: absolute;
  bottom: 0px;
  right: 300px;
`;

export function HeroHome() {
  const dialogs = [
    { content: 'Como vai você? Espero que esteja bem. Seja bem-vindo ao meu portfolio. Eu sou uma <strong>designer com background em arquitetura em busca de novos desafios,</strong> sinta-se à vontade para explorar um pouco mais sobre mim e meu trabalho.' },
    { content: 'Se precisar de uma <b>product designer</b>, ou mesmo apenas para conversar sobre design, arte, tecnologia, filmes e músicas, entre em contato comigo.' },
  ];
  return (
    <Container id="home">
      <HeaderContainer>
        <PageInfo>ux/ui design</PageInfo>
        <GreenBar />
      </HeaderContainer>
      <Hero>Olá, eu sou a Natalia</Hero>
      <OpenDialogsContainer>
        {dialogs.map((dialog) => (
          <Dialog key={dialog.content} dangerouslySetInnerHTML={{ __html: dialog.content }} />
        ))}
        <Smile src="/icons/smile.svg" />
      </OpenDialogsContainer>
    </Container>
  );
}
