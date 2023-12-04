import styled from '@emotion/styled';
import { FiTrash2 } from 'react-icons/fi';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  list-style: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  position: relative;
  max-width: 93%;
  gap: 12px;
  padding: 8px;

  background-color: var(--secondary-bg-color);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: calc(100% / 2 - 50px);
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16/12;
`;

export const Image = styled.img``;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: -40px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DeleteIcon = styled(FiTrash2)`
  width: 30px;
  height: 30px;
  color: red;
`;
