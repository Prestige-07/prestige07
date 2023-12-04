import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import {
  MainContainer,
  Section,
  SectionTitle,
} from 'components/Global/Global.styled';
import { Image } from './Gallery.styled';

import { getGallery } from 'redux/gallery/galleryOperations';
import { selectGallery } from 'redux/gallery/gallerySelectors';

export const Gallery = () => {
  const [isAutoplayStarted, setIsAutoplayStarted] = useState(false);
  const gallery = useSelector(selectGallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  useEffect(() => {
    const startAutoplay = () => {
      setIsAutoplayStarted(true);
    };

    setTimeout(startAutoplay, 1000);
  }, []);

  const sliderSettings = {
    autoPlay: isAutoplayStarted,
    interval: 3000,
    infiniteLoop: true,
    showArrows: true,
    showThumbs: false,
    swipeable: false,
    showStatus: false,
    stopOnHover: true,
  };

  return (
    <Section id="gallery">
      <MainContainer>
        <SectionTitle>Наші роботи</SectionTitle>
        <Carousel {...sliderSettings}>
          {gallery.map(item => (
            <Image
              key={item._id}
              loading="lazy"
              src={item.beforePhoto.url}
              alt={item.beforePhoto.alt || 'Зображення'}
              width="100%"
              height="auto"
            />
          ))}
        </Carousel>
      </MainContainer>
    </Section>
  );
};
