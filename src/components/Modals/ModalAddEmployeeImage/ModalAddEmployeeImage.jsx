import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ModalLayout } from '../ModalLayout';
import { Title } from '../Modal.styles';
import { Form, Input } from 'components/Forms/Forms.styled';
import { MainButton } from 'components/Global/Global.styled';

import { addImageToEmployee } from 'redux/employees/employeesOperations';

export const ModalAddEmployeeImage = ({ id, isOpen, handleExitModal }) => {
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('employee', image);
    dispatch(addImageToEmployee({ id, data: formData }));
    handleExitModal();
  };

  return (
    <ModalLayout
      handleExitModal={handleExitModal}
      handleBackdropClick={handleBackdropClick}
      isOpen={isOpen}
    >
      <Title>Додати зображення</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          required
          type="file"
          id="employee"
          name="employee"
          onChange={e => setImage(e.currentTarget.files[0])}
          variant="outlined"
          size="small"
        />
        <MainButton type="submit" color="var(--black-color)" margin={true}>
          Додати
        </MainButton>
      </Form>
    </ModalLayout>
  );
};
