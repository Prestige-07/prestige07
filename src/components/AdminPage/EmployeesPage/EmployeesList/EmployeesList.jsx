import { useSelector } from 'react-redux';
import { selectEmployees } from 'redux/employees/employeesSelectors';

import { List } from './EmployeesList.styled';
import { EmployeesItem } from '../EmployeesItem/EmployeesItem';

export const EmployeesList = () => {
  const employees = useSelector(selectEmployees);
  return (
    <List>
      {employees.map(employee => (
        <EmployeesItem key={employee._id} employee={employee} />
      ))}
    </List>
  );
};
