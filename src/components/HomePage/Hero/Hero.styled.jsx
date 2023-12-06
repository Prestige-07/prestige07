import styled from '@emotion/styled';

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;

  height: 480px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: fadeIn 0.5s ease-in-out forwards;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1200px) {
    padding-bottom: 100px;
    max-width: 1600px;
    height: 750px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  max-width: 310px;
  height: max-content;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  animation: rotate 0.7s linear both;
  border-radius: 12px;

  @media screen and (min-width: 1200px) {
    padding: 50px;
    max-width: 470px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  color: var(--primary-text-color);

  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0.07em;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
