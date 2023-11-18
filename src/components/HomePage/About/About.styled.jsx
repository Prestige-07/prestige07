import styled from '@emotion/styled';

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.17;
`;

export const StrongText = styled.strong`
  font-size: 18px;
`;

export const FeaturesTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 20px;
`;

export const ImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

export const ImagesItem = styled.li`
  flex-basis: calc(50% - 15px);
  border-radius: 8px;
  overflow: hidden;

  ${props =>
    props.isVisible &&
    `&:first-of-type {
    animation: slide-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:last-child {
    animation: slide-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}`};
`;
