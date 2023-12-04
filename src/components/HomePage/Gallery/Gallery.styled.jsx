import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  padding: 0 30px;
`;

export const Image = styled.img`
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
  @media screen and (min-width: 1200px) {
    height: 800px;
  }
`;
