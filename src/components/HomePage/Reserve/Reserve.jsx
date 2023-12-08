import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
import { Input, Label, FormCheckbox } from 'components/Forms/Forms.styled';
import { ModalCreatedOrder } from 'components/Modals/ModalCreatedOrder/ModalCreatedOrder';

export const Reserve = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  const validationSchema = yup.object().shape({
    clientName: yup.string("Введіть своє ім'я").required("Введіть своє ім'я"),
    clientPhone: yup
      .string('Введіть свій номер телефону')
      .matches(
        /^\+380\d{9}$/,
        'Номер телефону повинен відповідати формату +380XXXXXXXXX'
      )
      .required('Введіть свій номер телефону'),
    clientComment: yup
      .string()
      .max(500, 'Коментар повинен бути не більше 500 символів'),
  });

  const formik = useFormik({
    initialValues: {
      clientName: '',
      clientPhone: '+380',
      orderDate: '',
      clientComment: '',
      urgently: false,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const filteredValues = {};
      for (const key in values) {
        if (values[key] !== '') {
          filteredValues[key] = values[key];
        }
      }
      try {
        await axios.post(
          'https://prestige-07.com.ua/api/orders',
          filteredValues
        );
        setOpenModal(true);
        resetForm();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <Section id="reserve" paddingBottom={true}>
      <MainContainer>
        <ReserveWrapper>
          <LeftSide>
            <Logo />
          </LeftSide>

          <RightSide onSubmit={formik.handleSubmit}>
            <Title>Замовити послугу</Title>
            <Label>
              Ім'я *
              <Input
                required
                type="text"
                id="clientName"
                name="clientName"
                value={formik.values.clientName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.clientName && Boolean(formik.errors.clientName)
                }
                helperText={
                  formik.touched.clientName && formik.errors.clientName
                }
                variant="standard"
              />
            </Label>
            <Label>
              Номер телефону *
              <Input
                required
                type="tel"
                id="clientPhone"
                name="clientPhone"
                value={formik.values.clientPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.clientPhone &&
                  Boolean(formik.errors.clientPhone)
                }
                helperText={
                  formik.touched.clientPhone && formik.errors.clientPhone
                }
                variant="standard"
              />
            </Label>

            <Label>
              Бажаний час (необов'язково)
              <Input
                type="datetime-local"
                id="orderDate"
                name="orderDate"
                value={formik.values.orderDate}
                onChange={formik.handleChange}
                variant="standard"
              />
            </Label>

            <Label>
              Залишити коментар (необов'язково)
              <Input
                type="text"
                id="clientComment"
                name="clientComment"
                variant="standard"
                multiline
                rows={4}
                value={formik.values.clientComment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.clientComment &&
                  Boolean(formik.errors.clientComment)
                }
                helperText={
                  formik.touched.clientComment && formik.errors.clientComment
                }
              />
            </Label>
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
      <ModalCreatedOrder
        handleExitModal={handleExitModal}
        isOpen={isOpenModal}
      />
    </Section>
  );
};
