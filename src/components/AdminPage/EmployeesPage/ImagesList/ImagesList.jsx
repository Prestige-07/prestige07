import { useState } from 'react';
import { List, Item, AddBtn } from './ImagesList.styled';
import { ModalAddEmployeeImage } from 'components/Modals/ModalAddEmployeeImage/ModalAddEmployeeImage';
import { ImagesItem } from '../ImagesItem/ImagesItem';

export const ImagesList = ({ employee }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <List>
        {employee.images.map(image => (
          <ImagesItem key={image.id} employeeId={employee._id} image={image} />
        ))}
        <Item>
          <AddBtn
            type="button"
            title="Додати зображення"
            onClick={() => setOpenModal(true)}
          >
            +
          </AddBtn>
        </Item>
      </List>
      <ModalAddEmployeeImage
        id={employee._id}
        handleExitModal={handleExitModal}
        isOpen={isOpenModal}
      />
    </>
  );
};
