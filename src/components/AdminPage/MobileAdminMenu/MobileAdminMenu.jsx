import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MenuWrapper,
  UserWrapper,
  UserName,
  Logout,
  LogoutIcon,
  NavigationWrapper,
  NavigationList,
  NavigationItem,
  PageLink,
  UserIcon,
  MenuButton,
  MenuIcon,
} from './MobileAdminMenu.styled';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const MobileAdminMenu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      <MenuButton type="button">
        <MenuIcon
          toggled={isOpenMenu}
          toggle={setOpenMenu}
          rounded
          label="Розгорнути меню"
          size={24}
          color="var(--accent-color)"
          distance="lg"
          duration={0.7}
        />
      </MenuButton>

      <MenuWrapper isOpen={isOpenMenu}>
        <UserWrapper>
          <UserIcon />
          <UserName>{user.name}</UserName>
          <Logout type="button" onClick={() => dispatch(logout())}>
            <LogoutIcon />
          </Logout>
        </UserWrapper>

        <NavigationWrapper>
          <NavigationList>
            <NavigationItem>
              <PageLink to="orders" onClick={() => setOpenMenu(false)}>
                Замовлення
              </PageLink>
            </NavigationItem>
            <NavigationItem>
              <PageLink to="gallery" onClick={() => setOpenMenu(false)}>
                Галерея зображень
              </PageLink>
            </NavigationItem>
            <NavigationItem>
              <PageLink to="employees" onClick={() => setOpenMenu(false)}>
                Працівники
              </PageLink>
            </NavigationItem>
            <NavigationItem>
              <PageLink to="services" onClick={() => setOpenMenu(false)}>
                Послуги
              </PageLink>
            </NavigationItem>
            <NavigationItem>
              <PageLink to="reports" onClick={() => setOpenMenu(false)}>
                Звітність
              </PageLink>
            </NavigationItem>
          </NavigationList>
        </NavigationWrapper>
      </MenuWrapper>
    </>
  );
};
