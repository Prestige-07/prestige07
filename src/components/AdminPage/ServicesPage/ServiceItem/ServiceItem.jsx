import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  updateServiceById,
  deleteServiceById,
} from 'redux/services/servicesOperations';

import {
  Item,
  Button,
  Form,
  EditIcon,
  SaveIcon,
  DeleteIcon,
  Label,
  TextArea,
  Input,
} from './ServiceItem.styled';

export const ServicesItem = ({ service }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: service.name || '',
      price: service.price || '',
      employeePercent: service.employeePercent || '',
    },
    onSubmit: values => {
      console.log(values);
      dispatch(updateServiceById({ _id: service._id, data: values }));
      setEdit(false);
    },
  });

  return (
    <Item>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          Назва:
          <TextArea
            required
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            disabled={!isEdit}
          />
        </Label>
        <Label>
          Вартість:
          <Input
            required
            type="number"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            disabled={!isEdit}
          />
        </Label>
        <Label>
          %,працівнику:
          <Input
            required
            type="number"
            id="employeePercent"
            name="employeePercent"
            value={formik.values.employeePercent}
            onChange={formik.handleChange}
            disabled={!isEdit}
          />
        </Label>
        {isEdit && (
          <Button type="submit" top="40px" right="8px">
            <SaveIcon />
          </Button>
        )}
      </Form>
      <Button
        type="button"
        onClick={() => setEdit(!isEdit)}
        top="8px"
        right="8px"
      >
        <EditIcon />
      </Button>
      {!isEdit && (
        <Button
          type="button"
          onClick={() => dispatch(deleteServiceById(service._id))}
          top="40px"
          right="8px"
        >
          <DeleteIcon />
        </Button>
      )}
    </Item>
  );
};
