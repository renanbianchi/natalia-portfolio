import styled from 'styled-components';
import { Container, Ellipsis } from '../Shared';

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

  @media (max-width: 1280px) {
    padding-top: 48px;
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
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 48px;
  font-weight: 400;

  @media (max-width: 1280px) {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.iceCream};
  }
`;

const Content = styled.a`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
`;

export function Footer() {
  return (
    <ContentContainer>
      <ContactContainer>
        <Header>
          vamos criar juntos?
          <br /> entre em contato
        </Header>
        <Content target='_blank' href='mailto:natalia.lia15@gmail.com'>
          Email: natalia.lia15@gmail.com
          <br />
        </Content>
        <Content target='_blank' href='https://www.linkedin.com/in/nataliafernandesaraujo/'>
          Linkedin/in/nataliafernandesaraujo
        </Content>
      </ContactContainer>
      <img width={48} src='/icons/smile.svg' alt='smile icon' />
      <Ellipsis width={374} $right='0px' src='/images/elipse-blur-about-me.svg' alt='Ellipsis' />
    </ContentContainer>
  );
}
