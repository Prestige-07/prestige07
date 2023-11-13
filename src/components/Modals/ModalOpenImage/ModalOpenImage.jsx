import { ModalLayout } from '../ModalLayout';
import { Image } from './ModalOpenImage.styled';

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
      <Image src={props.image} alt="Документ" />
    </ModalLayout>
  );
};
