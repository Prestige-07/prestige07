import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import {
  MainContainer,
  Section,
  SectionTitle,
} from 'components/Global/Global.styled';
import {
  GalleryWrapper,
  GalleryItem,
  Image,
  Description,
} from './Gallery.styled';

import { getGallery } from 'redux/gallery/galleryOperations';
import { selectGallery } from 'redux/gallery/gallerySelectors';

export const Gallery = () => {
  const gallery = useSelector(selectGallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  const sliderSettings = {
    autoPlay: true,
    interval: 3000,
    infiniteLoop: true,
    showArrows: true,
    showThumbs: false,
    emulateTouch: true,
    showStatus: false,
    stopOnHover: true,
  };

  return (
    <Section id="gallery">
      <MainContainer>
        <SectionTitle>Наші роботи</SectionTitle>
        <Carousel {...sliderSettings}>
          {gallery.map(item => (
            <GalleryWrapper key={item._id}>
              <GalleryItem key={item.beforePhoto.url}>
                <Image
                  src={item.beforePhoto.url}
                  alt={item.beforePhoto.alt || 'Зображення'}
                  width="100%"
                  height="auto"
                />
                <Description>До</Description>
              </GalleryItem>
              <GalleryItem key={item.afterPhoto.url}>
                <Image
                  src={item.afterPhoto.url}
                  alt={item.afterPhoto.alt || 'Зображення'}
                  width="100%"
                  height="auto"
                />
                <Description>Після</Description>
              </GalleryItem>
            </GalleryWrapper>
          ))}
        </Carousel>
      </MainContainer>
    </Section>
  );
};
