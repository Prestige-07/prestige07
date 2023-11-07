import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  padding: 15px;
  min-width: content;
  background-color: var(--admin-items-bg-color);
  border-radius: 12px;
`;

export const OrderHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

export const MarkUrgency = styled.b`
  display: inline-block;
  padding: 5px;
  background-color: red;
  font-size: 10px;
  border-radius: 12px;
`;

export const OrderLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: var(--white-color);
  &:hover {
    color: var(--accent-color);
  }
`;

export const Status = styled.p`
  padding: 5px;
  margin-left: auto;
  text-align: center;
  min-width: max-content;
  border: none;
  border-radius: 8px;
  color: var(--black-color);
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
`;

export const PartContainer = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Text = styled.p``;
