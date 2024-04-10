import styled from 'styled-components';
import { Container } from '../Shared';
import { WithColorBehind } from '../WithColorBehind';

const ContentContainer = styled.div`
  margin-top: -55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 61px;
  z-index: 2;
  overflow-x: visible;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 48px;
  font-weight: 400;
`;

const Content = styled.a`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
`;

/* const Background = styled.div`
  background: rgb(139,118,255);
  background: radial-gradient(circle, rgba(139,118,255,1) 0%, rgba(16,23,32,1) 37%); 
  filter: blur(400px);
  border: 1px solid red;
  width: 50%;
  height: 200px;
  position: absolute;
  right: 0px;
  margin-right: -10px;
  overflow: hidden;
  overflow-clip-box: padding-box;
`;
 */
export function Footer() {
  return (
    <Container>
      <ContentContainer>
        <ContactContainer>
          <Header>
            vamos criar juntos?
            <br />
            {' '}
            entre em contato
          </Header>
          <WithColorBehind>
            <Content href='mailto:natalia.lia15@gmail.com'>
              Email: natalia.lia15@gmail.com
              <br />
            </Content>
          </WithColorBehind>
          <WithColorBehind>
            <Content href='https://www.linkedin.com/in/nataliafernandesaraujo/'>
              Linkedin/in/nataliafernandesaraujo
            </Content>
          </WithColorBehind>
        </ContactContainer>
        <img width={48} src="/icons/smile.svg" alt="smile icon" />
      </ContentContainer>
    </Container>
  );
}
