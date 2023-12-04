import styled from '@emotion/styled';
import { FiPhone } from 'react-icons/fi';

export const ContactsWrapper = styled.div`
  position: fixed;
  top: 120px;
  right: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  min-width: 300px;
`;

export const Button = styled.button`
  margin-bottom: 12px;

  width: 70px;
  height: 70px;

  background-color: transparent;
  backdrop-filter: blur(4px);
  box-shadow: var(--button-shadow);

  border: var(--button-border);
  border-radius: 50%;
  cursor: pointer;

  transform: scale(1);
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.1)};
  }
`;

export const Icon = styled(FiPhone)`
  width: 30px;
  height: 30px;
  color: var(--white-color);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
  animation: shakeAnimation 2s infinite;я
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  box-shadow: var(--button-shadow);

  border: var(--button-border);
  border-radius: 20px;
  list-style: none;

  transition: transform var(--transition), opacity var(--transition),
    visibility var(--transition);

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(0)')};
`;

export const Item = styled.li`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--white-color);
`;

export const Link = styled.a`
  font-size: 16px;
  color: var(--accent-color);
`;
