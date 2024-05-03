import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled, { css, keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../../public/theme';

const NavBarContainer = styled.div<{visible: boolean, menuOpen: boolean}>`
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
  overflow-y: hidden;
  transition: top 0.3s ease-in-out;
  top: ${({visible}) => visible ? '0' : '-70px'};

  @media (max-width: 1280px) {
    margin: 0px;
    padding: 12px 16px;
    flex-direction: ${({menuOpen}) => menuOpen ? `column` : `row`};
    max-height: ${({menuOpen}) => menuOpen ? `1000px` : `100px`};
    min-height: ${({menuOpen}) => menuOpen ? `500px` : `0px`};
    align-items: flex-start;
    gap: 108px;
    width: 100%;
    border-radius: ${({menuOpen}) => menuOpen ? `0px` : `36px`};
  }
`;

const NavigateButton = styled.button`
  margin-bottom: -1px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.iceCream};
  text-decoration: none;
  
  @media (max-width: 1280px) {
    font-size: 32px;
  }
`;

const OptionsContainer = styled.div<{menuOpen: boolean}>`
  display: flex;
  gap: 40px;  

  @media (max-width: 1280px) {
    display: ${({menuOpen}) => menuOpen ? `flex` : `none`};
    flex-direction: column;
    gap: 36px;
    align-items: flex-start;
    height: 100%;
  }
`;

const LinksContainer = styled.div<{menuOpen: boolean}>`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1280px) {
    display: ${({menuOpen}) => menuOpen ? `flex` : `none`};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LinkButton = styled.a`
  display: flex;
  margin-bottom: -1px;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.iceCream};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 1280px) { 
    padding-top: 2px;
  }

`
const BurgerMenuContainer = styled.button<{menuOpen: boolean}>`
  display: none;

  @media (max-width: 1280px) {
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  margin-left: auto;
  
  position: ${({menuOpen}) => menuOpen ? `absolute` : `auto`};
  right: ${({menuOpen}) => menuOpen ? `15px` : `auto`};
}
`

export function NavBar() {
  const options = [
    { name: 'projetos', to: 'projects' },
    { name: 'sobre mim', to: 'about' },
    { name: 'currículo', to: 'resume' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    if (!menuOpen) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, menuOpen]);

  return (
    <NavBarContainer menuOpen={menuOpen} visible={visible} id='navbar'>
      <Button onClick={() => {
        const home = document.getElementById('home')
        if (home) {
          setMenuOpen(false);
          home.scrollIntoView({behavior: 'smooth'})
        }
      }}>
      <img width={43.9} height={20} src="/icons/logo.svg" alt="Natalia Logo" />
      </Button>
      <OptionsContainer menuOpen={menuOpen}>
        {options.map((option) => (
          <NavigateButton
            key={option.to}
            onClick={() => {
              const targetElement = document.getElementById(option.to);
              if (targetElement) {
                setMenuOpen(!menuOpen);
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {option.name}
          </NavigateButton>
        ))}
      </OptionsContainer>
      <LinksContainer menuOpen={menuOpen}>
        <LinkButton target="_blank" href='mailto:natalia.lia15@gmail.com'>
          <MailOutlineIcon />
          email
        </LinkButton>
        <LinkButton target="_blank" href='https://www.linkedin.com/in/nataliafernandesaraujo/'>
          <LinkedInIcon />
          linkedin
        </LinkButton>
      </LinksContainer>
      <BurgerMenuContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 
        <CloseIcon style={{color: theme.colors.iceCream}} />  : 
        <MenuIcon style={{color: theme.colors.iceCream}} />}
      </BurgerMenuContainer>
    </NavBarContainer>
  );
}
