import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAllServices } from 'redux/services/servicesOperations';

import { ServicesList } from 'components/AdminPage/ServicesPage/ServicesList/ServicesList';
import {
  Section,
  HeaderContainer,
  SectionTitle,
  MainButton,
} from 'components/Global/Global.styled';
import { ModalAddService } from 'components/AdminPage/Modals/ModalAddService/ModalAddService';

const ServicesPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const handleExitModal = () => {
    setOpenModal(false);
  };

  return (
    <Section>
      <HeaderContainer>
        <SectionTitle>Послуги</SectionTitle>
        <MainButton type="button" onClick={() => setOpenModal(true)}>
          Додати послугу
        </MainButton>
      </HeaderContainer>

      <ServicesList />

      <ModalAddService handleExitModal={handleExitModal} isOpen={isOpenModal} />
    </Section>
  );
};

export default ServicesPage;
