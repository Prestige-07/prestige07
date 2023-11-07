import styled from '@emotion/styled';
import { FiTrash2 } from 'react-icons/fi';

export const Item = styled.li`
  position: relative;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.5;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const DelBtn = styled.button`
  position: absolute;
  top: 0;
  right: -16px;
  padding: 0;

  background-color: transparent;

  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const DelIcon = styled(FiTrash2)`
  color: red;
`;
