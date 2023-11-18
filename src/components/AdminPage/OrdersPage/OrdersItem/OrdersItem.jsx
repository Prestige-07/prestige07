import {
  Item,
  OrderHeader,
  MarkUrgency,
  OrderLink,
  Status,
  PartContainer,
  Text,
  LeftSide,
} from './OrdersItem.styled';

import { formatedDate } from 'utils/formatedDate';

export const OrdersItem = ({ order }) => (
  <Item>
    <OrderHeader>
      <OrderLink to={`/admin/order/${order.orderNumber}`}>
        {`Замовлення ${order.orderNumber}`}
      </OrderLink>
      {order.urgently && <MarkUrgency>Терміново!</MarkUrgency>}
      <Status type="button" color={order.status}>
        {`${order.status}`}
      </Status>
    </OrderHeader>

    <hr />

    <PartContainer>
      <LeftSide>
        <Text>{`Клієнт: ${order.clientName}`}</Text>
        <Text>{`Контакти: ${order.clientPhone}`}</Text>
        <Text>{`Об'єкт замовлення: ${
          order.serviceObject ? order.serviceObject : ''
        }`}</Text>
        <Text>{`Дата та час заїзду: ${
          order.orderDate ? formatedDate(order.orderDate) : ''
        }`}</Text>
        {order.orderExecutionDate && (
          <Text>{`Дата та час виконання: ${formatedDate(
            order.orderExecutionDate
          )}`}</Text>
        )}
      </LeftSide>
    </PartContainer>

    <hr />

    <Text>{`Працівник: ${order.washer ? order.washer : ''}`}</Text>

    <hr />

    <Text>{`Вартість замовлення: ${order.discountedCostOrder} грн`}</Text>
  </Item>
);
