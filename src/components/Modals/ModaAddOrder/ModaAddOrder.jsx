import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { ModalLayout } from '../ModalLayout';
import { Title } from '../Modal.styles';
import {
  Form,
  Label,
  LabelText,
  FormSelect,
  Input,
  SelectOption,
  FormCheckbox,
} from 'components/Forms/Forms.styled';
import { MainButton } from 'components/Global/Global.styled';

import { getAllServices } from 'redux/services/servicesOperations';
import { getAllEmployees } from 'redux/employees/employeesOperations';

import { selectGetAllServices } from 'redux/services/servicesSelectors';
import { selectEmployees } from 'redux/employees/employeesSelectors';

import { addNewOrder } from 'redux/orders/ordersOperations';

export const ModaAddOrder = props => {
  const services = useSelector(selectGetAllServices);
  const employees = useSelector(selectEmployees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
    dispatch(getAllEmployees());
  }, [dispatch]);

  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const formik = useFormik({
    initialValues: {
      clientName: '',
      clientPhone: '',
      serviceObject: '',
      orderDate: '',
      services: [],
      washer: '',
      administrator: '',
      urgently: false,
    },
    onSubmit: values => {
      const filteredValues = {};
      for (const key in values) {
        if (values[key] !== '') {
          filteredValues[key] = values[key];
        }
      }
      dispatch(addNewOrder(filteredValues));
      handleExitModal();
    },
  });

  return (
    <ModalLayout handleExitModal={handleExitModal} isOpen={props.isOpen}>
      <Title>Створити замовлення</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          required
          type="text"
          id="clientName"
          name="clientName"
          label="Ім'я клієнта"
          value={formik.values.clientName}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Input
          required
          type="text"
          id="clientPhone"
          name="clientPhone"
          label="Телефон клієнта"
          value={formik.values.clientPhone}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Input
          required
          type="text"
          id="serviceObject"
          name="serviceObject"
          label="Об'єкт послуг"
          value={formik.values.serviceObject}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Label>
          <LabelText>Час заїзду *</LabelText>
          <Input
            required
            type="datetime-local"
            id="orderDate"
            name="orderDate"
            value={formik.values.orderDate}
            onChange={formik.handleChange}
            variant="outlined"
            size="small"
          />
        </Label>
        <Label>
          <LabelText>Послуги</LabelText>
          <FormSelect
            multiple
            id="services"
            name="services"
            value={formik.values.services}
            onChange={formik.handleChange}
            variant="outlined"
            size="small"
          >
            {services.map(service => (
              <SelectOption value={service} key={service._id}>
                {`${service.name}. ${service.price}грн`}
              </SelectOption>
            ))}
          </FormSelect>
        </Label>
        <Label>
          <LabelText>Працівник</LabelText>
          <FormSelect
            id="washer"
            name="washer"
            value={formik.values.washer}
            onChange={formik.handleChange}
            variant="outlined"
            size="small"
          >
            {employees.map(washer => (
              <SelectOption value={washer.name} key={washer._id}>
                {washer.name}
              </SelectOption>
            ))}
          </FormSelect>
        </Label>
        <Label>
          <FormCheckbox
            checked={formik.values.urgently}
            onChange={() =>
              formik.setFieldValue('urgently', !formik.values.urgently)
            }
          />
          Терміново!
        </Label>
        <MainButton type="submit" color="var(--black-color)" margin={true}>
          Додати
        </MainButton>
      </Form>
    </ModalLayout>
  );
};
