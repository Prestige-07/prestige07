import styled from '@emotion/styled';

export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const AdminContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 80px;
  }
`;

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: ${props => props.paddingBottom && `80px`};
  animation: fadeIn 0.5s ease-in-out forwards;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.17;

  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;

    font-size: 36px;
  }
`;

export const MainButton = styled.button`
  ${props =>
    props.position &&
    `position: absolute;
    top: 20px;
    right: 20px;
  `};

  margin: ${props => props.margin && `0 auto`};
  height: 50px;
  min-width: 200px;

  color: ${props => (props.color ? props.color : 'var(--white-color)')};
  background-color: transparent;
  box-shadow: var(--button-shadow);

  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.07em;

  border-radius: 25px;
  border: var(--button-border);
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: var(--black-color);
  }

  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
`;

export const MainLinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50px;
  min-width: 200px;

  box-shadow: var(--button-shadow);

  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.07em;

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }

  color: var(--white-color);
  background-color: transparent;

  border: var(--button-border);
  border-radius: 25px;
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: var(--black-color);
  }
`;
