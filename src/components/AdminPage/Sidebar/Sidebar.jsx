import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import {
  Wrapper,
  UserWrapper,
  UserIcon,
  UserName,
  Logout,
  LogoutIcon,
  NavigationWrapper,
  NavigationList,
  NavigationItem,
  PageLink,
} from './Sidebar.styled';

export const Sidebar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
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
            <PageLink to="orders" className="sidebar__item">
              Замовлення
            </PageLink>
          </NavigationItem>
          <NavigationItem>
            <PageLink to="gallery" className="sidebar__item">
              Галерея зображень
            </PageLink>
          </NavigationItem>
          <NavigationItem>
            <PageLink to="employees" className="sidebar__item">
              Працівники
            </PageLink>
          </NavigationItem>
          <NavigationItem>
            <PageLink to="services" className="sidebar__item">
              Послуги
            </PageLink>
          </NavigationItem>
          <NavigationItem>
            <PageLink to="reports" className="sidebar__item">
              Звітність
            </PageLink>
          </NavigationItem>
        </NavigationList>
      </NavigationWrapper>
    </Wrapper>
  );
};
