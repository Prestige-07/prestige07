import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { ModalLayout } from '../ModalLayout';
import { Title } from '../Modal.styles';
import {
  Form,
  Label,
  Input,
  FormCheckbox,
} from 'components/Forms/Forms.styled';
import { MainButton } from 'components/Global/Global.styled';

import { addEmployee } from 'redux/employees/employeesOperations';

export const ModalAddEmployee = props => {
  const dispatch = useDispatch();

  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      criminal: false,
      worksFromDate: '',
    },
    onSubmit: values => {
      dispatch(addEmployee(values));
      handleExitModal();
    },
  });

  return (
    <ModalLayout handleExitModal={handleExitModal} isOpen={props.isOpen}>
      <Title>Додати працівника</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          required
          type="text"
          id="name"
          name="name"
          label="Ім'я працівника"
          value={formik.values.name}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Input
          required
          type="tel"
          id="phone"
          name="phone"
          label="Номер телефона"
          value={formik.values.phone}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Label>
          Працює з:
          <Input
            required
            type="date"
            id="worksFromDate"
            name="worksFromDate"
            value={formik.values.worksFromDate}
            onChange={formik.handleChange}
            variant="outlined"
            size="small"
          />
        </Label>
        <Label>
          <FormCheckbox
            checked={formik.values.criminal}
            onChange={() =>
              formik.setFieldValue('criminal', !formik.values.criminal)
            }
          />
          Судимість
        </Label>

        <MainButton type="submit" color="var(--black-color)" margin={true}>
          Додати
        </MainButton>
      </Form>
    </ModalLayout>
  );
};
