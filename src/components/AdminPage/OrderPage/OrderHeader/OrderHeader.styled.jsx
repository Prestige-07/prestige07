import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--white-color);
`;

export const Title = styled.h2`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const MarkUrgency = styled.b`
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  padding: 5px;
  background-color: red;
  border-radius: 12px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Status = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;
  opacity: 0.6;
  transition: opacity var(--transition);
  &:hover {
    opacity: 1;
  }
`;

export const StatusButton = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${props => {
    switch (props.color) {
      case 'Виконане':
        return 'var(--filter-completed-color)';
      case 'В роботі':
        return 'var(--filter-inProcess-color)';
      case 'Скасоване':
        return 'var(--filter-cancelled-color)';
      default:
        return 'var(--filter-new-color)';
    }
  }};
  color: var(--black-color);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  position: relative;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    background-color: #0056b3;
  }
`;

export const StatusSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
