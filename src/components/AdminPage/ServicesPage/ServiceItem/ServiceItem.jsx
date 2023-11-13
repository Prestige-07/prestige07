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
  Select,
  TextArea,
  Input,
  TextWrapper,
  Text,
} from './ServiceItem.styled';

export const ServicesItem = ({ service }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteService = id => {
    const confirmDelete = window.confirm(
      'Ви впевнені, що хочете видалити послугу?'
    );
    if (confirmDelete) {
      dispatch(deleteServiceById(id));
    }
  };

  const formik = useFormik({
    initialValues: {
      name: service.name || '',
      price: service.price || '',
      employeePercent: service.employeePercent || '',
      pricePerMeter: service.pricePerMeter || false,
    },
    onSubmit: values => {
      dispatch(updateServiceById({ _id: service._id, data: values }));
      setEdit(false);
    },
  });

  return (
    <Item>
      <Form onSubmit={formik.handleSubmit}>
        {isEdit ? (
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
        ) : (
          <TextWrapper>
            <Text>Назва:</Text>
            <Text>{service.name}</Text>
          </TextWrapper>
        )}
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
        <Label>
          Ціна за м²/шт:
          <Select
            required
            id="pricePerMeter"
            name="pricePerMeter"
            value={formik.values.pricePerMeter}
            onChange={formik.handleChange}
            disabled={!isEdit}
          >
            <option value={false}>Ні</option>
            <option value={true}>Так</option>
          </Select>
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
          onClick={() => handleDeleteService(service._id)}
          top="40px"
          right="8px"
        >
          <DeleteIcon />
        </Button>
      )}
    </Item>
  );
};
