import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { getAllEmployeesForUser } from 'redux/employees/employeesOperations';
import { selectEmployees } from 'redux/employees/employeesSelectors';
import { addNewOrder } from 'redux/orders/ordersOperations';

import {
  MainContainer,
  Section,
  MainButton,
} from 'components/Global/Global.styled';
import {
  ReserveWrapper,
  LeftSide,
  Logo,
  RightSide,
  Title,
} from './Reserve.styled';
import {
  Input,
  Label,
  FormSelect,
  FormCheckbox,
  SelectOption,
} from 'components/Forms/Forms.styled';
import { ModalCreatedOrder } from 'components/AdminPage/Modals/ModalCreatedOrder/ModalCreatedOrder';

export const Reserve = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const employees = useSelector(selectEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployeesForUser());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  const formik = useFormik({
    initialValues: {
      clientName: '',
      clientPhone: '',
      clientComment: '',
      orderDate: '',
      washer: '',
      urgently: false,
    },
    onSubmit: (values, { resetForm }) => {
      const filteredValues = {};
      for (const key in values) {
        if (values[key] !== '') {
          filteredValues[key] = values[key];
        }
      }
      dispatch(addNewOrder(filteredValues));
      setOpenModal(true);
      resetForm();
    },
  });

  return (
    <Section id="reserve">
      <MainContainer>
        <ReserveWrapper>
          <LeftSide>
            <Logo />
          </LeftSide>

          <RightSide onSubmit={formik.handleSubmit}>
            <Title>Замовити послугу</Title>
            <Input
              required
              type="text"
              id="clientName"
              name="clientName"
              label="Ім'я"
              value={formik.values.clientName}
              onChange={formik.handleChange}
              variant="standard"
            />
            <Input
              required
              type="text"
              id="clientPhone"
              name="clientPhone"
              label="Номер телефону"
              value={formik.values.clientPhone}
              onChange={formik.handleChange}
              variant="standard"
            />

            <Label>
              Бажаний час *
              <Input
                required
                type="datetime-local"
                id="orderDate"
                name="orderDate"
                value={formik.values.orderDate}
                onChange={formik.handleChange}
                variant="standard"
              />
            </Label>

            <Label>
              Працівник
              <FormSelect
                id="washer"
                name="washer"
                value={formik.values.washer}
                onChange={formik.handleChange}
                variant="standard"
              >
                {employees.map(washer => (
                  <SelectOption value={washer.name} key={washer._id}>
                    {washer.name}
                  </SelectOption>
                ))}
              </FormSelect>
            </Label>

            <Input
              type="text"
              id="clientComment"
              name="clientComment"
              label="Залишити коментар"
              variant="standard"
              multiline
              rows={4}
              value={formik.values.clientComment}
              onChange={formik.handleChange}
            />
            <Label color="var(--black-color)">
              <FormCheckbox
                checked={formik.values.urgently}
                onChange={() =>
                  formik.setFieldValue('urgently', !formik.values.urgently)
                }
              />
              Терміново
            </Label>
            <MainButton type="submit" color="var(--black-color)">
              Відправити
            </MainButton>
          </RightSide>
        </ReserveWrapper>
      </MainContainer>
      {isOpenModal && <ModalCreatedOrder handleExitModal={handleExitModal} />}
    </Section>
  );
};
