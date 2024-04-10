/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import {
  PiCat, PiGlobeHemisphereWest, PiMusicNotes, PiAlien,
} from 'react-icons/pi';
import { Container } from '../Shared';

const ContentContainer = styled.div<{reversed?: boolean}>`
  display: flex;
  justify-content: ${({ reversed }) => (reversed ? 'center' : '')};
  align-items: flex-start;
  margin-top: 79px;
  margin-bottom: 140px;
  gap: 113px;
`;

const PictureContainer = styled.div<{reversed?: boolean}>`
  width: fit-content;
  z-index: 999;

  > img {
    border-top-left-radius: ${({ reversed }) => (reversed ? '' : '250px')};
    border-top-right-radius: ${({ reversed }) => (reversed ? '' : '250px')};
    border-bottom-left-radius: ${({ reversed }) => (reversed ? '250px' : '')};
    border-bottom-right-radius: ${({ reversed }) => (reversed ? '250px' : '')};
  }
`;

const Description = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 64px;
  font-weight: 400;
  word-wrap: break-word;
  width: 807px;
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
    <Container>
      <ContentContainer>
        <PictureContainer>
          <img src="/images/natalia1.png" alt="Natalia 1" />
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
          <img src="/images/natalia2.png" alt="Natalia 2" />
        </PictureContainer>
      </ContentContainer>
    </Container>
  );
}
