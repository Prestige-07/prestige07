import { useSelector } from 'react-redux';
import { selectGetAllServices } from 'redux/services/servicesSelectors';

import { List } from './ServicesList.styled';
import { ServicesItem } from '../ServiceItem/ServiceItem';

export const ServicesList = () => {
  const services = useSelector(selectGetAllServices);
  return (
    <List>
      {services.map(service => (
        <ServicesItem key={service._id} service={service} />
      ))}
    </List>
  );
};
