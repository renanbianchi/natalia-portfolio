import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled, { css, keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../../public/theme';
import { useRouter } from 'next/router';


const NavBarContainer = styled.div<{visible: boolean, menuopen: boolean}>`
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
    flex-direction: ${({menuopen}) => menuopen ? `column` : `row`};
    max-height: ${({menuopen}) => menuopen ? `1000px` : `100px`};
    min-height: ${({menuopen}) => menuopen ? `500px` : `0px`};
    align-items: flex-start;
    gap: 108px;
    width: 100%;
    border-radius: ${({menuopen}) => menuopen ? `0px` : `36px`};
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

const OptionsContainer = styled.div<{menuopen: boolean}>`
  display: flex;
  gap: 40px;  

  @media (max-width: 1280px) {
    display: ${({menuopen}) => menuopen ? `flex` : `none`};
    flex-direction: column;
    gap: 36px;
    align-items: flex-start;
    height: 100%;
  }
`;

const LinksContainer = styled.div<{menuopen: boolean}>`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1280px) {
    display: ${({menuopen}) => menuopen ? `flex` : `none`};
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
const BurgerMenuContainer = styled.button<{menuopen: boolean}>`
  display: none;

  @media (max-width: 1280px) {
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  margin-left: auto;
  
  position: ${({menuopen}) => menuopen ? `absolute` : `auto`};
  right: ${({menuopen}) => menuopen ? `15px` : `auto`};
}
`

export function NavBar() {
  const router = useRouter();
  const options = [
    { name: 'projetos', to: 'projects' },
    { name: 'sobre mim', to: 'about' },
    { name: 'currículo', to: 'resume' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const navigateToHomeAndScroll = async (to?: string) => {
    if (window.location.pathname !== '/') {
      await router.push('/');
    }
    const home = document.getElementById(to || 'home');
    if (home) {
      setMenuOpen(false);
      home.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <NavBarContainer menuopen={menuOpen} visible={visible} id='navbar'>
      <Button onClick={() => navigateToHomeAndScroll('home')}>
      <img width={43.9} height={20} src="/icons/logo.svg" alt="Natalia Logo" />
      </Button>
      <OptionsContainer menuopen={menuOpen}>
        {options.map((option) => (
          <NavigateButton
            key={option.to}
            onClick={() => navigateToHomeAndScroll(option.to)}
          >
            {option.name}
          </NavigateButton>
        ))}
      </OptionsContainer>
      <LinksContainer menuopen={menuOpen}>
        <LinkButton target="_blank" href='mailto:natalia.lia15@gmail.com'>
          <MailOutlineIcon />
          email
        </LinkButton>
        <LinkButton target="_blank" href='https://www.linkedin.com/in/nataliafernandesaraujo/'>
          <LinkedInIcon />
          linkedin
        </LinkButton>
      </LinksContainer>
      <BurgerMenuContainer menuopen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 
        <CloseIcon style={{color: theme.colors.iceCream}} />  : 
        <MenuIcon style={{color: theme.colors.iceCream}} />}
      </BurgerMenuContainer>
    </NavBarContainer>
  );
}
