import styled from '@emotion/styled';
import { ReactComponent } from '../../../images/icons/logo-without-star.svg';
import { FiPhone } from 'react-icons/fi';
import { Spin } from 'hamburger-react';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-image: var(--header-bg-color);
  animation: fadeIn 0.5s ease-in-out forwards;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: 60px;
  }
`;

export const Logo = styled(ReactComponent)`
  position: relative;
  z-index: 100;

  width: 60px;
  height: 60px;

  fill: var(--accent-color);
`;

export const Navigation = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    margin-left: 20px;
  }
  @media screen and (min-width: 1200px) {
    gap: 50px;
    margin-left: 90px;
  }
`;

export const NavItem = styled.li``;

export const Link = styled.a`
  display: block;
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};

  color: var(--header-text-color);
  fill: currentColor;

  font-weight: 400;
  font-size: 11px;
  line-height: 1.14;
  text-decoration: none;

  transition: color var(--transition);

  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const Contacts = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: auto;
    gap: 16px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: auto;
  }
`;

export const TelIcon = styled(FiPhone)`
  vertical-align: middle;
  margin-right: 5px;
`;

export const MenuButton = styled.button`
  position: relative;
  z-index: 100;
  background-color: transparent;
  border: none;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled(Spin)`
  width: 25px;
  height: 25px;
  color: var(--accent-color);
`;
