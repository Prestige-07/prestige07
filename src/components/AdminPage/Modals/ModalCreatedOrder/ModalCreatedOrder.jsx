import { ModalLayout } from '../ModalLayout';
import { Title, Text } from '../Modal.styles';

export const ModalCreatedOrder = props => {
  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal(true);
    }
  };

  return (
    <ModalLayout
      handleExitModal={handleExitModal}
      handleBackdropClick={handleBackdropClick}
      isOpen={props.isOpen}
    >
      <Title>Замовлення створено!</Title>
      <Text>Будь ласка, очікуйте на дзвінок оператора.</Text>
    </ModalLayout>
  );
};
