import { Backdrop, Modal, CloseButton, CloseIcon } from './Modal.styles';

export const ModalLayout = props => {
  return (
    <Backdrop
      onClick={e => {
        props.handleBackdropClick && props.handleBackdropClick(e);
      }}
      isOpen={props.isOpen}
    >
      <Modal>
        <CloseButton onClick={() => props.handleExitModal()}>
          <CloseIcon />
        </CloseButton>
        {props.children}
      </Modal>
    </Backdrop>
  );
};
