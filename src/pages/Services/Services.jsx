import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllServices } from 'redux/services/servicesOperations';

import { ServicesList } from 'components/AdminPage/ServicesPage/ServicesList/ServicesList';
import {
  Section,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
import { ModalAddService } from 'components/Modals/ModalAddService/ModalAddService';
import { selectIsLoadingServices } from 'redux/services/servicesSelectors';
import { Loading } from 'components/Loading/Loading';

const ServicesPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const isLoading = useSelector(selectIsLoadingServices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <Section paddingBottom={true}>
      <MainButton
        type="button"
        onClick={() => setOpenModal(true)}
        position={true}
      >
        Додати послугу
      </MainButton>
      <SectionTitle>Послуги</SectionTitle>

      <ServicesList />

      <ModalAddService handleExitModal={handleExitModal} isOpen={isOpenModal} />
      {isLoading && <Loading />}
    </Section>
  );
};

export default ServicesPage;
