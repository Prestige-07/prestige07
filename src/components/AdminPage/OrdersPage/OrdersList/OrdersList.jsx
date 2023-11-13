import { useSelector } from 'react-redux';
import { selectOrders } from 'redux/orders/ordersSelectors';

import { List } from './OrdersList.styled';
import { OrdersItem } from '../OrdersItem/OrdersItem';

export const OrdersList = () => {
  const orders = useSelector(selectOrders);
  return (
    <List>
      {orders.map(order => (
        <OrdersItem key={order._id} order={order} />
      ))}
    </List>
  );
};
