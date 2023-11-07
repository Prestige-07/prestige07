import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { GiExitDoor } from 'react-icons/gi';

export const Wrapper = styled.div`
  padding: 20px;
  width: 300px;
  height: 100vh;
  background-color: var(--secondary-bg-color);

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 80px;
`;

export const UserIcon = styled(FiUser)`
  width: 40px;
  height: 40px;
  color: var(--accent-color);
  background-color: var(--admin-items-bg-color);
  border-radius: 8px;
`;

export const UserName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.14;
  letter-spacing: 0.02em;
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

  color: #ffffff;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  border-radius: 12px;

  &.active {
    color: var(--accent-color);
    background-color: var(--admin-items-bg-color);
  }
`;
