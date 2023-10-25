import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  HeaderContainer,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
import { EmployeesList } from 'components/AdminPage/EmployeesPage/EmployeesList/EmployeesList';
import { ModalAddEmployee } from 'components/AdminPage/Modals/ModalAddEmployee/ModalAddEmployee';
import { Loading } from 'components/Loading/Loading';

import { getAllEmployees } from 'redux/employees/employeesOperations';
import { selectIsLoadingEmployees } from 'redux/employees/employeesSelectors';

const EmployeesPage = () => {
  const isLoading = useSelector(selectIsLoadingEmployees);

  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Section>
      <HeaderContainer>
        <SectionTitle>Працівники</SectionTitle>
        <MainButton
          type="button"
          onClick={() => setOpenModal(true)}
          color="var(--white-color)"
        >
          Додати працівника
        </MainButton>
      </HeaderContainer>

      <EmployeesList />

      <ModalAddEmployee
        handleExitModal={handleExitModal}
        isOpen={isOpenModal}
      />
    </Section>
  );
};

export default EmployeesPage;
