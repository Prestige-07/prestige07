import { useState } from 'react';
import { ReactComponent as Logo } from '../../../images/icons/logo-without-star.svg';

import { Spin as Hamburger } from 'hamburger-react';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExitMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <a href="#home" onClick={() => handleExitMenu()}>
            <Logo width="60px" height="60px" className="logo" />
          </a>

          <nav className="nav">
            <ul className="nav__list list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Головна
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  Про нас
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Послуги
                </a>
              </li>
              <li className="nav__item">
                <a href="#gallery" className="nav__link">
                  Наші роботи
                </a>
              </li>
              <li className="nav__item">
                <a href="#contacts" className="nav__link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-contacts">
            <a href="tel:+380961111111" className="header-contacts__link">
              <svg className="contacts__icon" width="20px" height="20px">
                <use href="./images/icons.svg#tel"></use>
              </svg>
              +38 096 111 11 11
            </a>
            <a href="#reserve" className="btn header__btn">
              Замовити послугу
            </a>
          </div>

          <button type="button" className="menu__btn">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              rounded
              label="Розгорнути меню"
              size={24}
              color="var(--accent-color)"
              distance="lg"
              duration={0.7}
            />
          </button>
        </div>
        {isOpen && <MobileMenu handleExitMenu={handleExitMenu} />}
      </div>
    </header>
  );
};
