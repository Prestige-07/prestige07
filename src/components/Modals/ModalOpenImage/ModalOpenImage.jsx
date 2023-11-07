import { ModalLayout } from '../ModalLayout';

export const ModalOpenImage = props => {
  const handleExitModal = () => props.handleExitModal();

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal();
    }
  };

  return (
    <ModalLayout
      handleExitModal={handleExitModal}
      handleBackdropClick={handleBackdropClick}
      isOpen={props.isOpen}
    >
      <img src={props.image} alt="Документ" />
    </ModalLayout>
  );
};
