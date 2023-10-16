import {
  MenuWrapper,
  Navigation,
  NavigationList,
  NavigationItem,
  Link,
  ContactsWrapper,
  ReserveButton,
} from './MobileMenu.styled';

export const MobileMenu = params => {
  return (
    <MenuWrapper>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <Link href="#home" onClick={() => params.handleExitMenu()}>
              Головна
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="#about" onClick={() => params.handleExitMenu()}>
              Про нас
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="#services" onClick={() => params.handleExitMenu()}>
              Послуги
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="#gallery" onClick={() => params.handleExitMenu()}>
              Наші роботи
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="#contacts" onClick={() => params.handleExitMenu()}>
              Контакти
            </Link>
          </NavigationItem>
        </NavigationList>
      </Navigation>

      <ContactsWrapper>
        <Link href="tel:+380961111111">+38 096 111 11 11</Link>
        <ReserveButton href="#reserve" onClick={() => params.handleExitMenu()}>
          Замовити послугу
        </ReserveButton>
      </ContactsWrapper>
    </MenuWrapper>
  );
};
