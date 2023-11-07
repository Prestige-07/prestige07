import styled from '@emotion/styled';

export const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  list-style: none;
`;

export const FilterItem = styled.li``;

export const FilterButton = styled.button`
  background-color: ${props => props.color};
  padding: 5px;
  min-width: 75px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const AmountOrders = styled.span`
  margin-left: 5px;
`;
