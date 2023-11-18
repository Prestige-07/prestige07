import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
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
  const {
    orderNumber,
    urgently,
    status,
    washer,
    serviceObject,
    orderDate,
    administrator,
    payment,
  } = order;
  const dispatch = useDispatch();

  const handleChangeStatus = async e => {
    const newStatus = e.target.value;
    if (newStatus === 'Виконане') {
      if (
        !washer ||
        !serviceObject ||
        !orderDate ||
        !administrator ||
        !payment
      ) {
        toast.error("Заповніть всі обов'язкові поля");
        e.target.value = '';
        return;
      }
    }

    if (newStatus !== status) {
      await dispatch(
        updateOrderByNumber({
          number: orderNumber,
          data: { status: newStatus },
        })
      );
    }
  };

  return (
    <Header>
      <Title>{`Замовлення: ${orderNumber}`}</Title>
      {urgently && <MarkUrgency>Терміново!</MarkUrgency>}

      <Status title="Змінити статус">
        <StatusButton color={status}>{status}</StatusButton>
        <StatusSelect onChange={e => handleChangeStatus(e)}>
          <option value=""></option>
          <option value="В роботі"> В роботі </option>
          <option value="Виконане"> Виконане </option>
          <option value="Скасоване"> Скасоване</option>
        </StatusSelect>
      </Status>
    </Header>
  );
};
