import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalOrders } from 'redux/orders/ordersSelectors';

import {
  FilterList,
  FilterItem,
  FilterButton,
  AmountOrders,
} from './OrdersFilterList.styled';

export const OrdersFilterList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const totalOrders = useSelector(selectTotalOrders);

  const handleStatusFilter = query => {
    queryParams.set('status', query);

    navigate(
      `/admin/orders?${query.length > 0 ? `status=${query}` : ''}&page=1`
    );
  };

  return (
    <FilterList>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-all-color)"
          onClick={e => {
            handleStatusFilter('');
          }}
        >
          Всі
          <AmountOrders>
            {totalOrders ? totalOrders.allOrders : '0'}
          </AmountOrders>
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-new-color)"
          onClick={e => {
            handleStatusFilter('Нове');
          }}
        >
          Нові
          <AmountOrders>
            {totalOrders ? totalOrders.newOrders : '0'}
          </AmountOrders>
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-inProcess-color)"
          onClick={e => {
            handleStatusFilter('В роботі');
          }}
        >
          В роботі
          <AmountOrders>
            {totalOrders ? totalOrders.inProcessOrders : '0'}
          </AmountOrders>
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-completed-color)"
          onClick={e => {
            handleStatusFilter('Виконане');
          }}
        >
          Виконані
          <AmountOrders>
            {totalOrders ? totalOrders.completedOrders : '0'}
          </AmountOrders>
        </FilterButton>
      </FilterItem>
      <FilterItem>
        <FilterButton
          type="button"
          color="var(--filter-cancelled-color)"
          onClick={e => {
            handleStatusFilter('Скасоване');
          }}
        >
          Скасовані
          <AmountOrders>
            {totalOrders ? totalOrders.cancelledOrders : '0'}
          </AmountOrders>
        </FilterButton>
      </FilterItem>
    </FilterList>
  );
};
