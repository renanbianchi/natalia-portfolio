import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const NavBarContainer = styled.div<{visible: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 20px;
  margin: 20px 210px 0px 210px;
  position: fixed;
  padding: 8px 60px;
  z-index: 9999 !important;
  transition: top 0.3s;
  top: ${({visible}) => visible ? '0' : '-70px'};
`;

const NavigateButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.iceCream};
  text-decoration: none;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 40px;  
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;  
`;

const LinkButton = styled.a`
  display: flex;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.iceCream};
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export function NavBar() {
  const options = [
    { name: 'projetos', to: 'projects' },
    { name: 'sobre mim', to: 'about' },
    { name: 'currículo', to: 'resume' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);



  return (
    <NavBarContainer visible={visible} id='navbar'>
      <Button onClick={() => {
        const home = document.getElementById('home')
        if (home) {
          home.scrollIntoView({behavior: 'smooth'})
        }
      }}>
      <img width={43.9} height={20} src="/icons/logo.svg" alt="Natalia Logo" />
      </Button>
      <OptionsContainer>
        {options.map((option) => (
          <NavigateButton
            key={option.to}
            onClick={() => {
              const targetElement = document.getElementById(option.to);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {option.name}
          </NavigateButton>
        ))}
      </OptionsContainer>
      <LinksContainer>
        <LinkButton href='mailto:natalia.lia15@gmail.com'>
          <MailOutlineIcon />
          email
        </LinkButton>
        <LinkButton href='https://www.linkedin.com/in/nataliafernandesaraujo/'>
          <LinkedInIcon />
          linkedin
        </LinkButton>
      </LinksContainer>
    </NavBarContainer>
  );
}
