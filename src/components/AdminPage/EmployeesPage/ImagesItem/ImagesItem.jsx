import { useState } from 'react';
import { Item, Image, DelBtn, DelIcon } from './ImagesItem.styled';
import { ModalOpenImage } from 'components/Modals/ModalOpenImage/ModalOpenImage';

import { deleteImageFromEmployee } from 'redux/employees/employeesOperations';
import { useDispatch } from 'react-redux';

export const ImagesItem = ({ employeeId, image }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleExitModal = () => setOpenModal(false);

  const handleDeleteImage = imageId => {
    const confirmDelete = window.confirm(
      'Ви впевнені, що хочете видалити це зображення?'
    );
    if (confirmDelete) {
      dispatch(
        deleteImageFromEmployee({
          id: employeeId,
          data: { imageId },
        })
      );
    }
  };

  return (
    <Item>
      <Image
        src={image.url}
        alt="Документ"
        title="Відкрити зображення"
        onClick={() => setOpenModal(true)}
      />
      <DelBtn
        type="button"
        title="Видалити"
        onClick={() => handleDeleteImage(image.id)}
      >
        <DelIcon />
      </DelBtn>
      <ModalOpenImage
        isOpen={isOpenModal}
        handleExitModal={handleExitModal}
        image={image.url}
      />
    </Item>
  );
};
