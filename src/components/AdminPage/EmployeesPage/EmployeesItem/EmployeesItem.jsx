import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  updateEmployeeById,
  deleteEmployeeById,
} from 'redux/employees/employeesOperations';

import { calculateAgeToNow } from 'utils/calculateAgeToNow';

import {
  Item,
  Button,
  Form,
  EditIcon,
  SaveIcon,
  DeleteIcon,
  Label,
  Input,
  Text,
  Select,
} from './EmployeesItem.styled';
import { ImagesList } from '../ImagesList/ImagesList';

export const EmployeesItem = ({ employee }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteEmployee = id => {
    const confirmDelete = window.confirm(
      'Ви впевнені, що хочете видалити працівника?'
    );
    if (confirmDelete) {
      dispatch(deleteEmployeeById(id));
    }
  };

  const formik = useFormik({
    initialValues: {
      phone: employee.phone || '',
      criminal: employee.criminal || false,
      worksFromDate: employee.worksFromDate || '',
    },
    onSubmit: values => {
      dispatch(updateEmployeeById({ _id: employee._id, data: values }));
      setEdit(false);
    },
  });

  return (
    <Item>
      <Form onSubmit={formik.handleSubmit}>
        <Text>{`Ім'я: ${employee.name}`}</Text>
        <Label>
          Телефон:
          <Input
            required
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            disabled={!isEdit}
          />
        </Label>
        <Label>
          Судимість:
          <Select
            required
            id="criminal"
            name="criminal"
            value={formik.values.criminal}
            onChange={formik.handleChange}
            disabled={!isEdit}
          >
            <option value={false}>Ні</option>
            <option value={true}>Так</option>
          </Select>
        </Label>
        {!isEdit && (
          <Text>{`Працює: ${calculateAgeToNow(employee.worksFromDate)}`}</Text>
        )}
        {isEdit && (
          <Label>
            Працює:
            <Input
              required
              type="date"
              id="worksFromDate"
              name="worksFromDate"
              value={formik.values.worksFromDate}
              onChange={formik.handleChange}
              disabled={!isEdit}
            />
          </Label>
        )}

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
          onClick={() => handleDeleteEmployee(employee._id)}
          top="40px"
          right="8px"
        >
          <DeleteIcon />
        </Button>
      )}
      <ImagesList employee={employee} />
    </Item>
  );
};
