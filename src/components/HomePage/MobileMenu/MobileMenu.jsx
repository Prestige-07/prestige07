import { handleSmoothScroll } from 'utils/handleSmoothScroll';
import {
  MenuWrapper,
  Navigation,
  NavigationList,
  NavigationItem,
  Link,
  ContactsWrapper,
  ReserveButton,
} from './MobileMenu.styled';

export const MobileMenu = ({ isOpen, handleExitMenu }) => {
  return (
    <MenuWrapper isOpen={isOpen}>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <Link
              href="#home"
              onClick={e => {
                e.preventDefault();
                handleSmoothScroll('home');
                handleExitMenu();
              }}
            >
              Головна
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link
              href="#about"
              onClick={e => {
                e.preventDefault();
                handleSmoothScroll('about');
                handleExitMenu();
              }}
            >
              Про нас
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link
              href="#services"
              onClick={e => {
                e.preventDefault();
                handleSmoothScroll('services');
                handleExitMenu();
              }}
            >
              Послуги
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link
              href="#gallery"
              onClick={e => {
                e.preventDefault();
                handleSmoothScroll('gallery');
                handleExitMenu();
              }}
            >
              Наші роботи
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link
              href="#contacts"
              onClick={e => {
                e.preventDefault();
                handleSmoothScroll('contacts');
                handleExitMenu();
              }}
            >
              Контакти
            </Link>
          </NavigationItem>
        </NavigationList>
      </Navigation>

      <ContactsWrapper>
        <Link href="tel:+380961111111">+38 096 111 11 11</Link>
        <ReserveButton
          href="#reserve"
          onClick={e => {
            e.preventDefault();
            handleSmoothScroll('reserve');
            handleExitMenu();
          }}
        >
          Замовити послугу
        </ReserveButton>
      </ContactsWrapper>
    </MenuWrapper>
  );
};
