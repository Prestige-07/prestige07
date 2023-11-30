import styled from '@emotion/styled';

export const ServicesWrapper = styled.div`
  padding: 20px;
  background-color: var(--secondary-bg-color);
  border-radius: 12px;
`;

export const ContentWrapper = styled.div`
  border-radius: 12px;
  padding: 30px 20px;
  background-color: var(--shadow-bg-color);

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 0;
    background: none;
  }
`;

export const ServicesList = styled.ul`
  border-radius: 12px;
  @media screen and (min-width: 1200px) {
    padding: 30px 20px;
    width: 570px;
    background-color: var(--shadow-bg-color);
  }
  @media screen and (max-width: 1199px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const ServicesItem = styled.li`
  display: flex;

  color: var(--primary-text-color);

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.02em;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.67;
  }
`;

export const ServiceName = styled.p``;
