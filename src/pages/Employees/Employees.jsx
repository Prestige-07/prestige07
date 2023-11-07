import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
import { EmployeesList } from 'components/AdminPage/EmployeesPage/EmployeesList/EmployeesList';
import { ModalAddEmployee } from 'components/Modals/ModalAddEmployee/ModalAddEmployee';
import { Loading } from 'components/Loading/Loading';

import { getAllEmployees } from 'redux/employees/employeesOperations';
import {
  selectIsLoadingEmployees,
  selectIsUpdating,
} from 'redux/employees/employeesSelectors';

const EmployeesPage = () => {
  const isLoading = useSelector(selectIsLoadingEmployees);
  const isUpdating = useSelector(selectIsUpdating);

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
    <Section paddingBottom={true}>
      <MainButton
        type="button"
        onClick={() => setOpenModal(true)}
        color="var(--white-color)"
        position={true}
      >
        Додати працівника
      </MainButton>
      <SectionTitle>Працівники</SectionTitle>

      <EmployeesList />

      <ModalAddEmployee
        handleExitModal={handleExitModal}
        isOpen={isOpenModal}
      />
      {isUpdating && <Loading />}
    </Section>
  );
};

export default EmployeesPage;
