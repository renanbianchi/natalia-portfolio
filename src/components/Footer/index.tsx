import Link from 'next/link';
import { MdArrowOutward, MdOutlineContentCopy } from "react-icons/md";
import styled from 'styled-components';
import { Background, Container, Ellipsis } from '../Shared';

const ContentContainer = styled(Container)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  background: none;
  height: auto;
  padding-top: 120px;
  padding-bottom: 64px;
  
  border-start-start-radius: 60px;
  border-start-end-radius: 60px;
  background-color: ${({ theme }) => theme.colors.midnightBlue};

  @media (max-width: 1280px) {
    padding-top: 64px;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: auto;

  @media (max-width: 1280px) {
    max-width: 200px;
    gap: 64px;
  }
`;

const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.boldfont};
  font-size: 48px;
  font-weight: 400;


  @media (max-width: 1280px) {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.iceCream};
  }
`;

const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  font-weight: 500;
  max-width: 530px;
`;

const EmailAndLinkedinLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 24px;
  }
`;

const LinkTo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 32px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
`;

export function Footer() {
  return (
    <Background color='iceCream'>
      <ContentContainer>
        <ContactContainer>
          <Header>
            vamos criar juntos?
          </Header>
          <Subtitle>
            Se estiver procurando uma designer, quiser bater um papo sobre design, arte, tecnologia, filmes ou músicas, entre em contato.
          </Subtitle>
        </ContactContainer>
        <EmailAndLinkedinLinks>
          <LinkTo target='_blank' href='mailto:natalia.lia15@gmail.com'>Email <MdOutlineContentCopy size={24} /></LinkTo>
          <LinkTo target='_blank' href='https://www.linkedin.com/in/nataliafernandesaraujo/'>Linkedin <MdArrowOutward size={24} /></LinkTo>
        </EmailAndLinkedinLinks>
        <Ellipsis width={374} $right='0px' src='/images/elipse-blur-about-me.svg' alt='Ellipsis' />
      </ContentContainer>
    </Background>
  );
}
