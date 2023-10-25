import styled from '@emotion/styled';
import { ReactComponent } from '../../../images/icons/logo-without-star.svg';

export const ReserveWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  border: 2px solid var(--accent-color);
  overflow: hidden;
`;

export const LeftSide = styled.div`
  display: none;
  flex-basis: calc(100% / 2);
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Logo = styled(ReactComponent)`
  position: relative;
  z-index: 100;

  width: 200px;
  height: 200px;

  fill: var(--accent-color);
`;

export const RightSide = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: var(--form-bg-color);
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2);
  }
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;

  color: var(--black-color);

  font-weight: 700;
  font-size: 28px;
  line-height: 1.17;

  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`;
