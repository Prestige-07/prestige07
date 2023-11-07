import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  HeaderContainer,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
import { GalleryList } from 'components/AdminPage/GalleryPage/GalleryList/GalleryList';
import { ModalAddPhotos } from 'components/Modals/ModalAddPhotos/ModalAddPhotos';
import { Loading } from 'components/Loading/Loading';

import { getGallery } from 'redux/gallery/galleryOperations';
import { selectIsLoading } from 'redux/gallery/gallerySelectors';

const Gallery = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <Section paddingBottom={true}>
      <HeaderContainer>
        <SectionTitle>Галерея зображень</SectionTitle>
        <MainButton type="button" onClick={() => setOpenModal(true)}>
          Додати зображення
        </MainButton>
      </HeaderContainer>
      <GalleryList />
      <ModalAddPhotos handleExitModal={handleExitModal} isOpen={isOpenModal} />
      {isLoading && <Loading />}
    </Section>
  );
};

export default Gallery;
