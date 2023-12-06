import { useState } from 'react';
import { handleSmoothScroll } from 'utils/handleSmoothScroll';

import { MainContainer, MainLinkButton } from 'components/Global/Global.styled';
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  Navigation,
  NavList,
  NavItem,
  Link,
  Contacts,
  IconLink,
  InstagramIcon,
  MenuButton,
  MenuIcon,
} from './Header.styled';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExitMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderWrapper>
      <MainContainer>
        <HeaderContainer>
          <a
            href="#home"
            onClick={e => {
              e.preventDefault();
              handleSmoothScroll('home');
              handleExitMenu();
            }}
          >
            <Logo />
          </a>

          <IconLink
            href="https://www.instagram.com/avto_studio_0707"
            target="_blank"
          >
            <InstagramIcon />
            avto_studio_0707
          </IconLink>

          <Navigation>
            <NavList>
              <NavItem>
                <Link
                  href="#home"
                  onClick={e => {
                    e.preventDefault();
                    handleSmoothScroll('home');
                    handleExitMenu();
                  }}
                  paddingTop="32px"
                  paddingBottom="32px"
                >
                  Головна
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="#about"
                  onClick={e => {
                    e.preventDefault();
                    handleSmoothScroll('about');
                    handleExitMenu();
                  }}
                  paddingTop="32px"
                  paddingBottom="32px"
                >
                  Про нас
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="#services"
                  onClick={e => {
                    e.preventDefault();
                    handleSmoothScroll('services');
                    handleExitMenu();
                  }}
                  paddingTop="32px"
                  paddingBottom="32px"
                >
                  Послуги
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="#gallery"
                  onClick={e => {
                    e.preventDefault();
                    handleSmoothScroll('gallery');
                    handleExitMenu();
                  }}
                  paddingTop="32px"
                  paddingBottom="32px"
                >
                  Наші роботи
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="#contacts"
                  onClick={e => {
                    e.preventDefault();
                    handleSmoothScroll('contacts');
                    handleExitMenu();
                  }}
                  paddingTop="32px"
                  paddingBottom="32px"
                >
                  Контакти
                </Link>
              </NavItem>
            </NavList>
          </Navigation>

          <Contacts>
            <MainLinkButton
              href="#reserve"
              onClick={e => {
                e.preventDefault();
                handleSmoothScroll('reserve');
                handleExitMenu();
              }}
            >
              Замовити послугу
            </MainLinkButton>
          </Contacts>

          <MenuButton type="button">
            <MenuIcon
              toggled={isOpen}
              toggle={setIsOpen}
              rounded
              label="Розгорнути меню"
              size={24}
              color="var(--accent-color)"
              distance="lg"
              duration={0.7}
            />
          </MenuButton>
        </HeaderContainer>
        <MobileMenu handleExitMenu={handleExitMenu} isOpen={isOpen} />
      </MainContainer>
    </HeaderWrapper>
  );
};
