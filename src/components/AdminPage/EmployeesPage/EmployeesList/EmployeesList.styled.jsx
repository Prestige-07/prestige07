import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  flex-basis: 100%;

  background-color: var(--secondary-bg-color);

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 30px);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 60px);
  }
`;

export const Text = styled.p``;

export const Edit = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;
