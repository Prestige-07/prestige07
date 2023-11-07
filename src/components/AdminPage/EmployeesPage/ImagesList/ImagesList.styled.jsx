import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
`;

export const AddBtn = styled.button`
  width: 60px;
  height: 60px;
  font-size: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
`;
