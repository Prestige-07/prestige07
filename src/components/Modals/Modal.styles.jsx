import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(10px);

  transition: transform var(--transition), opacity var(--transition),
    visibility var(--transition);

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(1.5)')};
`;

export const Modal = styled.div`
  position: relative;

  padding: 30px;
  max-width: 480px;
  width: 100%;

  background-color: var(--white-color);

  border: 4px solid var(--accent-color);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  color: black;
  font-size: 24px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--black-color);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
`;
