import { useDispatch } from 'react-redux';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';

import {
  Header,
  Title,
  MarkUrgency,
  Status,
  StatusSelect,
  StatusButton,
} from './OrderHeader.styled';

export const OrderHeader = ({ order }) => {
  const dispatch = useDispatch();

  return (
    <Header>
      <Title>{`Замовлення: ${order.orderNumber}`}</Title>
      {order.urgently && <MarkUrgency>Терміново!</MarkUrgency>}

      <Status>
        <StatusButton color={order.status}>{order.status}</StatusButton>
        <StatusSelect
          onChange={e => {
            dispatch(
              updateOrderByNumber({
                number: order.orderNumber,
                data: { status: e.target.value },
              })
            );
          }}
        >
          <option value=""></option>
          <option value="В роботі"> В роботі </option>
          <option value="Виконане"> Виконане </option>
          <option value="Скасоване"> Скасоване</option>
        </StatusSelect>
      </Status>
    </Header>
  );
};
