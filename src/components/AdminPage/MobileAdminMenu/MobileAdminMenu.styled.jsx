import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { Spin } from 'hamburger-react';
import { GiExitDoor } from 'react-icons/gi';

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--primary-bg-color);
  @media screen and (min-width: 1200px) {
    display: none;
  }
  transition: transform var(--transition), opacity var(--transition),
    visibility var(--transition);

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  border-radius: 12px;
`;

export const UserIcon = styled(FiUser)`
  width: 40px;
  height: 40px;
  color: var(--accent-color);
  background-color: var(--admin-items-bg-color);
  border-radius: 8px;
`;

export const Logout = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LogoutIcon = styled(GiExitDoor)`
  width: 40px;
  height: 40px;
  color: red;
`;

export const NavigationWrapper = styled.nav``;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li``;

export const PageLink = styled(NavLink)`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  width: 100vh;

  color: #ffffff;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  border-radius: 12px;

  &.active {
    color: var(--accent-color);
    background-color: var(--admin-items-bg-color);
  }
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
  padding: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const MenuIcon = styled(Spin)``;
