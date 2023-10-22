import { useState } from 'react';

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
  TelIcon,
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
          <a href="#home" onClick={() => handleExitMenu()}>
            <Logo />
          </a>

          <Navigation>
            <NavList>
              <NavItem>
                <Link href="#home" paddingTop="32px" paddingBottom="32px">
                  Головна
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#about" paddingTop="32px" paddingBottom="32px">
                  Про нас
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#services" paddingTop="32px" paddingBottom="32px">
                  Послуги
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#gallery" paddingTop="32px" paddingBottom="32px">
                  Наші роботи
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#contacts" paddingTop="32px" paddingBottom="32px">
                  Контакти
                </Link>
              </NavItem>
            </NavList>
          </Navigation>

          <Contacts>
            <Link href="tel:+380961111111">
              <TelIcon />
              +38 096 111 11 11
            </Link>
            <MainLinkButton href="#reserve">Замовити послугу</MainLinkButton>
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
        {isOpen && <MobileMenu handleExitMenu={handleExitMenu} />}
      </MainContainer>
    </HeaderWrapper>
  );
};
