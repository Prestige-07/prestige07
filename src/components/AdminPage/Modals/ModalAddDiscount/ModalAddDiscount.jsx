import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { ModalLayout } from '../ModalLayout';
import { Title } from '../Modal.styles';
import { Form, Input } from '../../../Forms/Forms.styled';
import { MainButton } from 'components/Global/Global.styled';

import { selectOrderByNumber } from 'redux/orders/ordersSelectors';
import { updateOrderByNumber } from 'redux/orders/ordersOperations';

export const ModalAddDiscount = props => {
  const order = useSelector(selectOrderByNumber);

  const dispatch = useDispatch();

  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      discountPercent: '',
    },
    onSubmit: values => {
      dispatch(
        updateOrderByNumber({ number: order.orderNumber, data: { ...values } })
      );
      handleExitModal();
    },
  });

  return (
    <ModalLayout
      handleExitModal={handleExitModal}
      handleBackdropClick={handleBackdropClick}
      isOpen={props.isOpen}
    >
      <Title>Додати знижку</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          required
          type="number"
          inputProps={{ min: '0' }}
          id="discountPercent"
          name="discountPercent"
          label="Відсоток знижки"
          value={formik.values.discountPercent}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <MainButton type="submit" color="var(--black-color)" margin={true}>
          Додати
        </MainButton>
      </Form>
    </ModalLayout>
  );
};
