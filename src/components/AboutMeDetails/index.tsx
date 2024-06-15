/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import {
  PiCat, PiGlobeHemisphereWest, PiMusicNotes, PiAlien,
} from 'react-icons/pi';
import { Container, Ellipsis } from '../Shared';

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
`;

const Description = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 64px;
  font-weight: 400;
  word-wrap: break-word;
  width: 807px;

  @media (max-width: 1280px) {
    font-size: 32px;
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
  width: 580px;
  gap: 20px;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 50px;
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
    color: ${({ theme }) => theme.colors.iceCream};
  }
`;

export function AboutMeDetails() {
  return (
    <Container noise>
      <ContentContainer>
        <PictureContainer>
          <img src="/images/natalia1.webp" alt="Natalia 1" />
          <Ellipsis bottom='-377px' left='-200px' src="/images/elipse-blur-about-me.svg" alt="Ellipsis" />

        </PictureContainer>
        <Description>
          Product Designer, graduada em Design e em arquitetura, me encontrei na
          interseção entre o mundo físico e o digital.
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
        <PictureContainer reversed>
          <img src="/images/natalia2.webp" alt="Natalia 2" />
          <Ellipsis width='800px' bottom='-213px' left='-11px' src="/images/elipse-blur-about-me.svg" alt="Ellipsis" />

        </PictureContainer>
      </ContentContainer>
    </Container>
  );
}
