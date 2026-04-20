import { FaArrowDown } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import { Background, Container } from '../Shared';

const HeroContainer = styled(Container)`
  position: relative;
  overflow: visible;
  background-image: url('/images/noise.webp');
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  min-height: 100vh;
  border-end-start-radius: 120px;
  border-end-end-radius: 120px;

  @media (max-width: 1000px) {
    border-end-start-radius: 30px;
    border-end-end-radius: 30px;
  }
`;

const Hero = styled.h1<{ $inview: boolean }>`
  font-family: ${({ theme }) => theme.fonts.boldfont};
  font-size: clamp(68px, 20vw, 200px);
  color: ${({ theme }) => theme.colors.iceCream};
  max-width: 1215px;


  /* opacity: ${({ $inview }) => ($inview ? '1' : '0')}; */
  /* padding-bottom: ${({ $inview }) => ($inview ? '0px' : '50px')}; */
  /* margin-top: ${({ $inview }) => ($inview ? '0px' : '-300px')}; */
  /* transition: margin-top 5s ease-in-out; */

  > br {
    display: none;
  }

  @media (max-width: 1280px) {
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

const HeroAndDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const OpenDialogsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 120px;
  position: relative;

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
  font-size: clamp(12px, 1vw, 14px);
  color: ${({ theme }) => theme.colors.iceCream};
  max-width: 25vw;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 80vw;
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

const CheckMyWorkContainer = styled.div`
  position: absolute;
  right: 10vw;
  bottom: -8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 60px;
  max-width: 168px;
  max-height: 168px;
`;

const ArchedText = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 260px;
  overflow: visible;
  pointer-events: none;

  text {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 14px;
    fill: ${({ theme }) => theme.colors.iceCream};
    letter-spacing: 2px;
  }
`;

export function HeroHome() {
  const { ref: heroRef, inView: heroInView } = useInView();

  const dialogs = [
    {
      content:
        'Sou uma UX/UI designer com olhar analítico e uma vontade constante de entender como as pessoas pensam, sentem e se movimentam pelo mundo. Trago uma bagagem que mistura arquitetura, design gráfico e pesquisa, com foco em criar experiências acessíveis e cheias de intenção.',
    }
  ];
  return (
    <Background color="iceCream">
      <HeroContainer id='home'>
        <GradientLight src='/images/spotLight.svg' alt='imagem spotlight' />

        <HeaderContainer>
          <PageInfo>ux/ui design</PageInfo>
          <GreenBar />
        </HeaderContainer>
        <HeroAndDialogContainer>
          <Hero ref={heroRef} $inview={heroInView}>
            Olá, <br />
            eu sou a Natalia.
          </Hero>
          <OpenDialogsContainer>
            {dialogs.map((dialog) => (
              <Dialog key={dialog.content} dangerouslySetInnerHTML={{ __html: dialog.content }} />
            ))}
          </OpenDialogsContainer>
        </HeroAndDialogContainer>
        <CheckMyWorkContainer>
          <ArrowContainer>
            <ArchedText viewBox='0 0 260 260'>
              <defs>
                <path
                  id='arched-text-path'
                  d='M 30,130 A 100,100 0 0 1 230,130'
                />
              </defs>
              <text>
                <textPath
                  href='#arched-text-path'
                  startOffset='50%'
                  textAnchor='middle'
                >
                  . Conheça o meu trabalho .
                </textPath>
              </text>
            </ArchedText>
            <FaArrowDown size={60} />
          </ArrowContainer>
        </CheckMyWorkContainer>
      </HeroContainer>
    </Background>
  );
}
