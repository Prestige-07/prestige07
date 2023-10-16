import styled from '@emotion/styled';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-bg-color);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li``;

export const Link = styled.a`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;

  color: var(--header-text-color);

  font-weight: 500;
  font-size: 20px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color var(--transition);

  text-align: center;
`;

export const ContactsWrapper = styled.div`
  margin-top: 25px;
`;

export const ReserveButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50px;
  min-width: 200px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  color: var(--white-color);
  box-shadow: 0px 4px 4px var(--accent-color);

  border-radius: 25px;
  border: 1px solid var(--accent-color);
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: var(--black-color);
  }
`;
