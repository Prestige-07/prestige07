import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { ModalLayout } from '../ModalLayout';
import { Title } from '../Modal.styles';
import { Form, Label, Input, FormCheckbox } from '../../../Forms/Forms.styled';
import { MainButton } from 'components/Global/Global.styled';

import { addService } from 'redux/services/servicesOperations';

export const ModalAddService = props => {
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
      name: '',
      price: '',
      pricePerMeter: false,
      employeePercent: '',
    },
    onSubmit: values => {
      dispatch(addService(values));
      handleExitModal();
    },
  });

  return (
    <ModalLayout
      handleExitModal={handleExitModal}
      handleBackdropClick={handleBackdropClick}
    >
      <Title>Додати послугу</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          required
          type="text"
          id="name"
          name="name"
          label="Назва послуги"
          value={formik.values.name}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Input
          required
          type="text"
          id="price"
          name="price"
          label="Ціна послуги"
          value={formik.values.price}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Label>
          <FormCheckbox
            checked={formik.values.pricePerMeter}
            onChange={() =>
              formik.setFieldValue(
                'pricePerMeter',
                !formik.values.pricePerMeter
              )
            }
          />
          Ціна за м²
        </Label>
        <Input
          required
          type="number"
          inputProps={{ min: '0' }}
          id="employeePercent"
          name="employeePercent"
          label="Відсоток працівнику"
          value={formik.values.employeePercent}
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
