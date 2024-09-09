import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import { Container } from '../Shared';

const Hero = styled.h1<{ $inview: boolean }>`
  font-family: ${({ theme }) => theme.fonts.boldfont};
  font-size: 200px;
  color: ${({ theme }) => theme.colors.iceCream};
  width: 1215px;

  /* opacity: ${({ $inview }) => ($inview ? '1' : '0')}; */
  /* padding-bottom: ${({ $inview }) => ($inview ? '0px' : '50px')}; */
  /* margin-top: ${({ $inview }) => ($inview ? '0px' : '-300px')}; */
  /* transition: margin-top 5s ease-in-out; */

  > br {
    display: none;
  }

  @media (max-width: 1280px) {
    font-size: 68px;
    width: 368px;
    white-space: pre-wrap;
    > br {
      display: block;
    }
  }
`;

const Animation = keyframes`
   0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: rotate(-173.32deg);
    opacity: 1;
  }
`;

const HeroContainer = styled(Container)`
  background-color: transparent;
  position: relative;
  overflow: hidden;
  background-image: url('/images/noise.webp');
`;

const GradientLight = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: blur(300px);
  animation: ${Animation} 4s infinite alternate;

  @media (max-width: 1280px) {
    left: 10rem;
  }
`;

const OpenDialogsContainer = styled.div`
  margin-top: 133px;
  display: flex;
  gap: 120px;
  position: relative;
  margin-bottom: 150px;

  @media (max-width: 1280px) {
    gap: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 41px;
    margin-top: 50px;

    span: first-child {
      order: 1;
      width: 100%;
      padding: 0px 100px 0px 0px;
      white-space: pre-wrap;
    }

    > img {
      order: 2;
      width: 42px;
    }

    span: nth-child(2) {
      order: 3;
    }
  }
`;

const Dialog = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.iceCream};
  width: 482px;

  @media (max-width: 1280px) {
    font-size: 12px;
    width: 70vw;
  }
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

const Smile = styled(Image)`
  width: auto;
  height: auto;
`;

export function HeroHome() {
  const { ref: heroRef, inView: heroInView } = useInView();

  const dialogs = [
    {
      content:
        'Boas vindas a este portfolio. Fique à vontade para explorar mais sobre mim e meu trabalho. Se estiver procurando uma designer, quiser bater um papo sobre design, arte, tecnologia, filmes ou músicas, entre em contato.',
    }
  ];
  return (
    <HeroContainer id='home'>
      <GradientLight src='/images/spotLight.svg' alt='imagem spotlight' />

      <HeaderContainer>
        <PageInfo>ux/ui design</PageInfo>
        <GreenBar />
      </HeaderContainer>
      <Hero ref={heroRef} $inview={heroInView}>
        Olá, <br />
        eu sou a Natalia.
      </Hero>
      <OpenDialogsContainer>
        {dialogs.map((dialog) => (
          <Dialog key={dialog.content} dangerouslySetInnerHTML={{ __html: dialog.content }} />
        ))}
        <Smile width={48} height={48} src='/icons/smile.svg' alt='ícone smile' />
      </OpenDialogsContainer>
    </HeroContainer>
  );
}
