import styled from '@emotion/styled';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 40px 12px 12px;
  width: 100%;

  background-color: var(--secondary-bg-color);

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 15px);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 20px);
  }
`;

export const Text = styled.p``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const Button = styled.button`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.4;

  transition: opacity var(--transition);
  &:hover {
    opacity: 1;
  }
`;
export const EditIcon = styled(FiEdit)`
  width: 20px;
  height: 20px;
  color: yellow;
`;

export const SaveIcon = styled(FiSave)`
  width: 20px;
  height: 20px;
  color: green;
`;

export const DeleteIcon = styled(FiTrash2)`
  width: 20px;
  height: 20px;
  color: red;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  padding-left: 8px;
  border: none;
  border-radius: 8px;
  transition: background-color var(--transition), color var(--transition);
  :disabled {
    background-color: transparent;
    color: var(--white-color);
    opacity: 1;
  }
`;

export const Input = styled.input`
  padding-left: 8px;
  width: 100%;
  border: none;
  border-radius: 8px;
  transition: background-color var(--transition), color var(--transition);
  :disabled {
    background-color: transparent;
    color: var(--white-color);
  }
`;
