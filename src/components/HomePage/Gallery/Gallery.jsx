import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section__title">Наші роботи</h2>
        <Carousel {...sliderSettings}>
          {gallery.map((item, index) => (
            <GalleryWrapper key={item._id}>
              <GalleryItem key={item.beforePhoto.url}>
                <Image
                  src={item.beforePhoto.url}
                  alt="Example"
                  width="100%"
                  height="auto"
                />
                <Description>До</Description>
              </GalleryItem>
              <GalleryItem key={item.afterPhoto.url}>
                <Image
                  src={item.afterPhoto.url}
                  alt="Example"
                  width="100%"
                  height="auto"
                />
                <Description>Після</Description>
              </GalleryItem>
            </GalleryWrapper>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Slider from 'react-slick';

// import { getGallery } from 'redux/gallery/galleryOperations';
// import { selectGallery } from 'redux/gallery/gallerySelectors';

// // import lanos from '../../../images/lanos.webp';
// // import panamera from '../../../images/panamera.webp';

// export const Gallery = () => {
//   const gallery = useSelector(selectGallery);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getGallery());
//   }, [dispatch]);

//   // console.log(...gallery);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     rows: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           rows: 2,
//           arrows: false,
//         },
//       },
//     ],
//   };
//   return (
//     <section className="section" id="gallery">
//       <div className="container">
//         <h2 className="section__title">Наші роботи</h2>
//         <Slider {...settings}>
//           {/* {[
//             { image: lanos, description: 'До' },
//             { image: panamera, description: 'Після' },
//             { image: lanos, description: 'До' },
//             { image: panamera, description: 'Після' },
//             { image: lanos, description: 'До' },
//             { image: panamera, description: 'Після' },
//           ].map((item, index) => (
//             <div className="image-container" key={index}>
//               <img src={item.image} alt="Example" width="100%" height="100%" />
//               <h3 className="description">{item.description}</h3>
//             </div>
//           ))} */}
//           {gallery.map((item, index) => (
//             <div style={{ display: 'flex' }}>
//               <div className="image-container" key={item.beforePhoto.url}>
//                 <img
//                   src={item.beforePhoto.url}
//                   alt="Example"
//                   width="100%"
//                   height="100%"
//                 />
//                 <h3 className="description">До</h3>
//               </div>
//               <div className="image-container" key={item.afterPhoto.url}>
//                 <img
//                   src={item.afterPhoto.url}
//                   alt="Example"
//                   width="100%"
//                   height="100%"
//                 />
//                 <h3 className="description">Після</h3>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };
