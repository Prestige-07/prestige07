import { Backdrop, Modal, CloseButton, CloseIcon } from './Modal.styles';

export const ModalLayout = props => {
  return (
    <Backdrop onClick={e => props.handleBackdropClick(e)}>
      <Modal>
        <CloseButton onClick={() => props.handleExitModal()}>
          <CloseIcon />
        </CloseButton>
        {props.children}
      </Modal>
    </Backdrop>
  );
};
