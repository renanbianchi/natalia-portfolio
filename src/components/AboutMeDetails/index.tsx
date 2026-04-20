/* eslint-disable import/no-extraneous-dependencies */
import {
  PiAlien,
  PiCat, PiGlobeHemisphereWest, PiMusicNotes,
} from 'react-icons/pi';
import styled, { css } from 'styled-components';
import { Background, Container, Ellipsis } from '../Shared';

const ContentContainer = styled.div<{reversed?: boolean}>`

  display: flex;
  justify-content: ${({ reversed }) => (reversed ? 'center' : '')};
  align-items: ${({reversed}) => reversed ? `flex-start` : `center`};
  margin-top: 79px;
  margin-bottom: 140px;
  gap: 113px;

  @media (max-width: 1280px) {
    flex-direction: ${({ reversed }) => reversed ? `column-reverse` : `column`};
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 50px;
  }
`;

const PictureContainer = styled.div<{reversed?: boolean}>`
  position: relative;
  width: fit-content;

  > img {
    border-top-left-radius: ${({ reversed }) => (reversed ? '' : '250px')};
    border-top-right-radius: ${({ reversed }) => (reversed ? '' : '250px')};
    border-bottom-left-radius: ${({ reversed }) => (reversed ? '250px' : '')};
    border-bottom-right-radius: ${({ reversed }) => (reversed ? '250px' : '')};

    @media (max-width: 1280px) {
      width: 100%;
    };

  };

  > img:first-child {
    z-index: 3 !important;
    position: sticky;
  };

    ${({ reversed }) => reversed && css`
    position: absolute; 
    bottom: -190px; 
    left: -90px;

    > img {
      max-width: 240px;
      max-height: 240px;
    }

    @media (max-width: 1280px) {
      
      left: 0px;
    }
    `
  }
`;

const Description = styled.h1`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.fonts.boldfont};
  color: ${({ theme }) => theme.colors.midnightBlue};
  font-size: 96px;
  font-weight: 400;
  white-space: pre-wrap;
  width: 807px;


  @media (max-width: 1280px) {
    margin-top: 140px;
    font-size: 42px;
    width: auto;
  }
`;

const WhiteBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.iceCream};
  border-radius: 24px;
  margin-bottom: 49px;
`;

const CuriositiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -230px;
  margin-left: 80px;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 50px;

    margin-top: -70px;
    margin-left: 0px;
  }
`;

const Curiosities = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 8px;

  > span {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    color: ${({ theme }) => theme.colors.midnightBlue};
  }

  > svg {
    background-color: ${({ theme }) => theme.colors.violet};
    border-radius: 50%;
    padding: 6px;
    fill: ${({ theme }) => theme.colors.midnightBlue};
  }
`;

export function AboutMeDetails() {
  return (
      <Background color="iceCream">
        <Container>
          <ContentContainer>
            <PictureContainer>
              <img src="/images/natalia3.webp" alt="Natalia 3" />
              <Ellipsis $bottom='-377px' $left='-200px' src="/images/elipse-blur-about-me.svg" alt="Ellipsis" />
              <PictureContainer reversed>
                <img src="/images/natalia2.webp" alt="Natalia 2" />
              </PictureContainer>
            </PictureContainer>
            <Description>
              <span>UX/UI Designer,</span>
              <span>arquiteta,</span>
              <span>pesquisadora,</span>
             <span>e curiosa.</span>
            </Description>
          </ContentContainer>
          <WhiteBar />
          <ContentContainer reversed>
            <CuriositiesContainer>
              <Curiosities>
                <PiCat size={40} />
                {' '}
                <span>
                  Adoro animais, especialmente gatos. Para recordar uma das gatas que tive,
                  chamada Ramona, fiz uma montagem dela no quadro “Dama com Arminho”, de Da Vinci.
                  {' '}
                </span>
              </Curiosities>
              <Curiosities>
                <PiGlobeHemisphereWest size={40} />
                <span>
                  Tenho disponibilidade para mudança. Nasci em Goiânia,
                  mas através de bolsas de estudo e outras oportunidades,
                  já morei em Brasília, Chicago e Nova Iorque.
                  {' '}
                </span>
              </Curiosities>
              <Curiosities>
                <PiMusicNotes size={40} />
                <span>
                  Gosto de aprender coisas novas, por isso, quando era adolescente,
                  aprendi a tocar trompete na banda marcial da escola.
                  Isso me ensinou muito sobre trabalho em equipe e dedicação.
                </span>
              </Curiosities>
              <Curiosities>
                <PiAlien size={40} />
                <span>
                  Quando não estou estudando UX e UI design,
                  assisto séries e filmes sci-fi, de investigação policial,
                  comédias e vlogs de viagem.
                  Aprendi inglês sozinha através dessas mídias.
                </span>
              </Curiosities>
            </CuriositiesContainer>

          </ContentContainer>
        </Container>
      </Background>
  );
}
