import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';

import {
  MainContainer,
  Section,
  SectionTitle,
} from 'components/Global/Global.styled';
import { ImageWrapper, Image } from './Gallery.styled';

import { getGallery } from 'redux/gallery/galleryOperations';
import { selectGallery } from 'redux/gallery/gallerySelectors';

export const Gallery = () => {
  const [isAutoplayStarted, setIsAutoplayStarted] = useState(false);
  const gallery = useSelector(selectGallery);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  useEffect(() => {
    setIsAutoplayStarted(inView);
  }, [inView]);

  const sliderSettings = {
    selectedItem: isAutoplayStarted && 0,
    autoPlay: isAutoplayStarted,
    infiniteLoop: true,
    showArrows: true,
    swipeable: false,
    showStatus: false,
    stopOnHover: true,
    showThumbs: false,
  };

  return (
    <Section id="gallery" ref={ref}>
      <MainContainer>
        <SectionTitle>Наші роботи</SectionTitle>
        <Carousel {...sliderSettings}>
          {gallery.map(item => (
            <ImageWrapper key={item._id}>
              <Image
                loading="lazy"
                src={item.beforePhoto.url}
                alt={item.beforePhoto.alt || 'Зображення'}
                width="100%"
                height="auto"
              />
            </ImageWrapper>
          ))}
        </Carousel>
      </MainContainer>
    </Section>
  );
};
