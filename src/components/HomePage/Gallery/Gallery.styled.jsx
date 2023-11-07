import styled from '@emotion/styled';

export const GalleryWrapper = styled.div`
  display: flex;
  padding-bottom: 40px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  margin: 0 2px;
  height: 300px;
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    height: 250px;
  }
  @media screen and (min-width: 1200px) {
    height: 400px;
  }
`;

export const Image = styled.img``;

export const Description = styled.p`
  position: absolute;
  bottom: 0;
  padding: 15px 0;
  text-align: center;
  width: 100%;
  font-size: 30px;
  color: var(--description-color);
  background-color: var(--shadow-bg-color);
`;